const PROXY_CONFIG = [
    {
        context: [
            "/expense",
            "/share",
            "/user",
            "/debt",
            "/group",
            "/calculate"
        ],
        target: "http://162.55.185.65:8080",
        secure: false,
        changeOrigin: true
    }
]

module.exports = PROXY_CONFIG;