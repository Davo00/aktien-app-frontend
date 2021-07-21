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
        //target: "http://162.55.185.65:8080",
        target:"https://api.kreativegruppe42.de",
        secure: true,
        changeOrigin: true
    }
]

module.exports = PROXY_CONFIG;