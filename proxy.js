let cookie = "";
module.exports = {
    "/dlogin.php": {
        "target": "http://my.12301.test",
        "secure": false,
        "changeOrigin": true,
        // cookieDomainRewrite : {
        //     ".12301.local" : ".127.0.0.1"
        // }
        onProxyRes: function (proxyRes, req, res) {
            var cookies = proxyRes.headers['set-cookie'];
            var cookieRegex = /domain=\.12301\.test/i;
            if (cookies) {
                var newCookie = cookies.map(function (cookie) {
                    if (cookieRegex.test(cookie)) {
                        return cookie.replace(cookieRegex, 'domain=.127.0.0.1');
                    }
                    return cookie;
                });
                delete proxyRes.headers['set-cookie'];
                proxyRes.headers['set-cookie'] = newCookie;
                cookie = newCookie.join(" ");
                req.headers.cookie = newCookie;
            }
        },
        bypass(req,res){
            console.log("bypass",res.headers);
        },
        onProxyReq : function(proxyReq, req, res) {
            if(cookie){
                proxyReq.setHeader('Cookie', cookie);
            }
            proxyReq.setHeader('Referer', "http://my.12301.test");
        }
    },
    "/r/*": {
        "target": "http://my.12301.test",
        "secure": false,
        "changeOrigin": true,
        onProxyRes: function (proxyRes, req, res) {
            var cookies = proxyRes.headers['set-cookie'];
            var cookieRegex = /domain=\.12301\.test/i;
            if (cookies) {
                var newCookie = cookies.map(function (cookie) {
                    if (cookieRegex.test(cookie)) {
                        return cookie.replace(cookieRegex, 'domain=.127.0.0.1');
                    }
                    return cookie;
                });
                delete proxyRes.headers['set-cookie'];
                proxyRes.headers['set-cookie'] = newCookie;
                cookie = newCookie.join(" ");
            }
        },
        onProxyReq : function(proxyReq, req, res) {
            if(cookie){
                proxyReq.setHeader('Cookie', cookie);
            }
        }
    },
    
}

