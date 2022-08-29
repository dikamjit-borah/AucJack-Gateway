module.exports = routeRegistry = {

    signUp: {
        endpoint: "/signUp",
        host: process.env.HOST_AUCJACK_AUTHENTICATION,
        port: process.env.PORT_AUCJACK_AUTHENTICATION
    },

    authenticate: {
        endpoint: "/authenticate",
        host: process.env.HOST_AUCJACK_AUTHENTICATION,
        port: process.env.PORT_AUCJACK_AUTHENTICATION
    },

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
