require('dotenv').config()

const TAG = "server.js"
const express = require('express')

const basicUtils = require('./utils/basic.utils')
const constants = require('./utils/constants')

const routeApis = require('./routes/route.apis')
const app = express()
const port = process.env.PORT || 6061
app.set('port', port);
app.use(express.json())
app.use(routeApis)

app.listen(port, ()=>{
    basicUtils.logger(TAG, `AucJack-Gateway running on port ${port}`)
})
