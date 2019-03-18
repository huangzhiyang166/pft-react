const fs = require("fs");
const path = require("path");
const SERVER_API = process.env.SERVER_API;
let cookie = "";
const map = {
	local : `http://my.12301.local`,
	test : `http://my.12301.test`,
	release : `https://my.12301dev.com`,
	production : `https://my.12301.cc`,
}
const cookieRegexMap = {
	local : /domain=\.12301\.local/i,
	test : /domain=\.12301\.test/i,
	release : /domain=\.12301dev\.com/i,
	production : /domain=\.12301\.cc/i,
};
const root = map[SERVER_API] || map.local;


console.log("===================================================");
console.log(`即将代理请求到:${root}`);
console.log("===================================================");

const proxyConfig = {
	'/r': {    
		target: root,         // 接口域名
		secure: false,        // 如果是https接口，需要配置这个参数
		changeOrigin: true,   // 是否跨域
		headers: {
			'Access-Control-Allow-Origin': '*'
		},
		pathRewrite: {
			// '^/r': ''  
		},
		onProxyRes : function(proxyRes,req,res){
            var cookies = proxyRes.headers['set-cookie'];
            var cookieRegex = cookieRegexMap[SERVER_API] || cookieRegexMap.local;
            if (cookies) {
                var newCookie = cookies.map(function(cookie){
                    if (cookieRegex.test(cookie)) {
                        return cookie.replace(cookieRegex, 'domain=127.0.0.1');
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
	'/dlogin.php': {    
		target: root,         // 接口域名
		secure: false,        // 如果是https接口，需要配置这个参数
		changeOrigin: true,   // 是否跨域
		headers: {
			'Access-Control-Allow-Origin': '*'
		},
		pathRewrite: {
			// '^/r': ''  
		},
		onProxyRes : function(proxyRes,req,res){
            var cookies = proxyRes.headers['set-cookie'];
            var cookieRegex = cookieRegexMap[SERVER_API] || cookieRegexMap.local;
            if (cookies) {
                var newCookie = cookies.map(function(cookie){
                    if (cookieRegex.test(cookie)) {
                        return cookie.replace(cookieRegex, 'domain=127.0.0.1');
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
	'/dlogin_info.php': {    
		target: root,         // 接口域名
		secure: false,        // 如果是https接口，需要配置这个参数
		changeOrigin: true,   // 是否跨域
		headers: {
			'Access-Control-Allow-Origin': '*'
		},
		pathRewrite: {
			// '^/r': ''  
		},
		onProxyRes : function(proxyRes,req,res){
            var cookies = proxyRes.headers['set-cookie'];
            var cookieRegex = cookieRegexMap[SERVER_API] || cookieRegexMap.local;
            if (cookies) {
                var newCookie = cookies.map(function(cookie){
                    if (cookieRegex.test(cookie)) {
                        return cookie.replace(cookieRegex, 'domain=127.0.0.1');
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
	'/call/handle.php': {    
		target: root,         // 接口域名
		secure: false,        // 如果是https接口，需要配置这个参数
		changeOrigin: true,   // 是否跨域
		headers: {
			'Access-Control-Allow-Origin': '*'
		},
		onProxyRes : function(proxyRes,req,res){
            cookie = ""
        },
	}
}

module.exports = proxyConfig
