module.exports = routeRegistry = {
        postItem: {
            url: "/vendor/postItem",
            host: process.env.HOST_AUCJACK_BACKEND,
            port: process.env.PORT_AUCJACK_PORT
        },
        viewItems: {
            url: "/vendee/viewItems",
            host: process.env.HOST_AUCJACK_BACKEND,
            port: process.env.PORT_AUCJACK_PORT
        }
}
