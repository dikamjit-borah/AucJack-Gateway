const TAG = "route.handler.js"
const { default: axios } = require('axios');
const basicUtils = require('../utils/basic.utils')
const constants = require('../utils/constants')
module.exports = {
    handleAllRoutes: async function(req, res){
        const {api, path} = {...req.params}
        const endpoint = `${api}/${path}`
       
        basicUtils.logger(TAG, `Processing ${endpoint}`)
        axios({
            method: req.method,
            url: 'http://192.168.29.207:8080/vendee/viewItems',
            
        }).then((response)=>{
            res.send(response.data)
        }).catch((error)=>{
            basicUtils.logger(TAG, `Error processing request ${endpoint}`)
            res.send(error.response && error.response.data ? error.response.data : constants.messages.SMTHNG_WRNG)
        })
           
    }
}