module.exports = routeRegistry = {
        vendorpostItem: {
            endpoint: "/vendor/postItem",
            host: process.env.HOST_AUCJACK_BACKEND,
            port: process.env.PORT_AUCJACK_PORT
        },
        vendeeviewItems: {
            endpoint: "/vendee/viewItems",
            host: process.env.HOST_AUCJACK_BACKEND,
            port: process.env.PORT_AUCJACK_PORT
        }
}
