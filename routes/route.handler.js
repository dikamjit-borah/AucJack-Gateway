const TAG = "route.handler.js"
const { default: axios } = require('axios');
const httpStatus = require('http-status');
const basicUtils = require('../utils/basic.utils')
const constants = require('../utils/constants');
const routeRegistry = require('./route.registry');

module.exports = {
    handleAllRoutes: async function (req, res) {
        console.log(req.baseUrl);
        const { api, path } = { ...req.params }
        const endpoint = `${api}${path}`
        if (routeRegistry[endpoint]) {
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
                url: routeRegistry[endpoint].host + routeRegistry[endpoint].endpoint,

            }).then((response) => {
                return basicUtils.generateResponse(res, httpStatus.OK, constants.messages.REQ_SUCCESS, response.data ? response.data : response)
            }).catch((error) => {
                basicUtils.logger(TAG, `Error processing request ${endpoint}`)
                return basicUtils.generateResponse(res, httpStatus.INTERNAL_SERVER_ERROR, constants.messages.SMTHNG_WRNG, { error: "" + error })
            })
        }
        else {
            return basicUtils.generateResponse(res, httpStatus.BAD_REQUEST, constants.messages.API_NOT_EXIST)
        }
    }
}