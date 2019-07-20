const proxy = require("http-proxy-middleware");
module.exports = function(app){
    app.use("/ele",proxy({
        target:"http://localhost:80",
        changeOrigin:true,
        pathRewrite:{
            "^/ele":""
        }
    }))
}