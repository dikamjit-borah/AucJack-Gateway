const express = require('express')
const constants = require('../utils/constants')
const routeHandler = require('./route.handler')
const router = express.Router()

router.all('/:api/:path', routeHandler.handleAllRoutes)

module.exports = router