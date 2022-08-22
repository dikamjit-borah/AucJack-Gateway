const TAG = "route.handler.js"
const { default: axios } = require('axios');
const basicUtils = require('../utils/basic.utils')
const constants = require('../utils/constants');
const routeRegistry = require('./route.registry');

module.exports = {
    handleAllRoutes: async function(req, res){
        const {api, path} = {...req.params}
        const endpoint = `${api}${path}`
        if(routeRegistry[endpoint]){
            basicUtils.logger(TAG, `Processing ${endpoint}`)
            axios.interceptors.request.use(request => {
                basicUtils.logger(TAG, `Requesting ${request.url}`)
                return request
              })
              
              axios.interceptors.response.use(response => {
                basicUtils.logger(TAG, `Receiving ${response.data}`)
                return response
              })
            axios({
                method: req.method,
                url: routeRegistry[endpoint].host + routeRegistry[endpoint].endpoint ,
                
            }).then((response)=>{
                res.send(response.data)
            }).catch((error)=>{
                basicUtils.logger(TAG, `Error processing request ${endpoint}`)
                res.send(error.response && error.response.data ? error.response.data : constants.messages.SMTHNG_WRNG)
            })
        }
        else{
             res.send('Endpoint does not exist')
        }
    }
}