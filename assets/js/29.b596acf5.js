(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{157:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13),t._m(14),t._m(15),t._m(16),t._m(17),t._m(18),t._m(19),t._m(20),t._m(21),t._m(22),t._m(23),t._m(24),t._m(25),t._m(26),t._m(27),t._m(28),a("p",[t._v("首先你得到域名购买商增加一条 A record， 然后把主机记录设置子域名前缀 然后")]),t._m(29),t._m(30),a("p",[a("a",{attrs:{href:"https://lufficc.com/blog/nginx-for-beginners",target:"_blank",rel:"noopener noreferrer"}},[t._v("初识 Nginx"),a("OutboundLink")],1)]),a("p",[a("a",{attrs:{href:"https://www.jianshu.com/p/e0ff1e275e7f",target:"_blank",rel:"noopener noreferrer"}},[t._v("Nginx 配置 - Gzip 压缩"),a("OutboundLink")],1)]),a("p",[a("a",{attrs:{href:"https://www.cnblogs.com/x123811/p/6026666.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Nginx 查看日志"),a("OutboundLink")],1)]),a("p",[a("a",{attrs:{href:"http://originalee.oschina.io/2017/05/05/nginx%E9%85%8D%E7%BD%AE%E4%BA%8C%E7%BA%A7%E5%9F%9F%E5%90%8D/",target:"_blank",rel:"noopener noreferrer"}},[t._v("nginx 配置二级域名"),a("OutboundLink")],1)]),a("p",[a("a",{attrs:{href:"https://medium.com/@ThomasTan/installing-nginx-in-mac-os-x-maverick-with-homebrew-d8867b7e8a5a",target:"_blank",rel:"noopener noreferrer"}},[t._v("Installing Nginx in Mac OS X Maverick With Homebrew"),a("OutboundLink")],1)])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"nginx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nginx","aria-hidden":"true"}},[this._v("#")]),this._v(" nginx")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"macos-安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#macos-安装","aria-hidden":"true"}},[this._v("#")]),this._v(" macos 安装")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("brew install nginx")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("然后它的默认配置存放于 "),s("code",[this._v("/usr/local/etc/nginx/nginx.conf")]),this._v("\n默认网站托管文件存放于 "),s("code",[this._v("/usr/local/Cellar/nginx/1.15.0/html")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"基本操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本操作","aria-hidden":"true"}},[this._v("#")]),this._v(" 基本操作")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"启动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动","aria-hidden":"true"}},[this._v("#")]),this._v(" 启动")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("sudo nginx")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"关闭"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关闭","aria-hidden":"true"}},[this._v("#")]),this._v(" 关闭")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("sudo nginx -s stop")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"重载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重载","aria-hidden":"true"}},[this._v("#")]),this._v(" \b 重载")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("sudo nginx -s relaod")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"查看正在运行的-nginx-服务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看正在运行的-nginx-服务","aria-hidden":"true"}},[this._v("#")]),this._v(" 查看正在运行的 nginx 服务")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("ps -ax | grep nginx")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"测试配置文件是否有效"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#测试配置文件是否有效","aria-hidden":"true"}},[this._v("#")]),this._v(" 测试配置文件是否有效")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("sudo nginx -t")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#场景","aria-hidden":"true"}},[this._v("#")]),this._v(" 场景")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"反向代理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#反向代理","aria-hidden":"true"}},[this._v("#")]),this._v(" 反向代理")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v('nginx: [emerg] unknown directive "proxy_pass:" in /usr/local/etc/nginx/nginx.conf:9')])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("events")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("worker_connections")]),t._v("  "),a("span",{attrs:{class:"token number"}},[t._v("1024")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("http")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("include")]),t._v("       mime"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token keyword"}},[t._v("types")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("# 处理各种文件类型")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("server")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("listen")]),t._v("       "),a("span",{attrs:{class:"token number"}},[t._v("80")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("location")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("~")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("api "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("root")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("Users"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("me"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("projects"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("official"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("site"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("dist"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("proxy_pass")]),t._v("  "),a("span",{attrs:{class:"token keyword"}},[t._v("http")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),a("span",{attrs:{class:"token number"}},[t._v("127.0")]),a("span",{attrs:{class:"token number"}},[t._v(".0")]),a("span",{attrs:{class:"token number"}},[t._v(".1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token number"}},[t._v("3000")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("/")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v(" 一般使用这个就够了\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v(" Host "),a("span",{attrs:{class:"token variable"}},[t._v("$host")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token number"}},[t._v("80")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v(" X"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("Real"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("IP "),a("span",{attrs:{class:"token variable"}},[t._v("$remote_addr")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("proxy_set_header")]),t._v(" X"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("Forwarded"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("For "),a("span",{attrs:{class:"token variable"}},[t._v("$proxy_add_x_forwarded_for")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("index")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("index")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"spa-history-模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#spa-history-模式","aria-hidden":"true"}},[this._v("#")]),this._v(" SPA history 模式")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("events")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("worker_connections")]),t._v("  "),a("span",{attrs:{class:"token number"}},[t._v("1024")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("http")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("include")]),t._v("       mime"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token keyword"}},[t._v("types")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("# 处理各种文件类型")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("server")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("listen")]),t._v("       "),a("span",{attrs:{class:"token number"}},[t._v("80")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("location")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("root")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("Users"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("me"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("projects"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("official"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("site"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("dist"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("index")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("index")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("try_files")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("$uri")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("$uri")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("/")]),a("span",{attrs:{class:"token keyword"}},[t._v("index")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"gzip"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gzip","aria-hidden":"true"}},[this._v("#")]),this._v(" gzip")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在 response Header 中看到 "),s("code",[this._v("Content-Encoding: gzip")]),this._v(" 就说明开启成功了")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("events")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("worker_connections")]),t._v("  "),a("span",{attrs:{class:"token number"}},[t._v("1024")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("http")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("include")]),t._v("       mime"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token keyword"}},[t._v("types")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("# 处理各种文件类型")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("gzip")]),t._v(" on"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("gzip_min_length")]),t._v("  "),a("span",{attrs:{class:"token number"}},[t._v("1000")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("gzip_types")]),t._v("       text"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("plain application"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("x"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("javascript text"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("css application"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("xml application"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("javascript application"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("json"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("server")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("listen")]),t._v("       "),a("span",{attrs:{class:"token number"}},[t._v("80")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("location")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("root")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("Users"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("me"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("projects"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("official"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("site"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("dist"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("index")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("index")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("try_files")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("$uri")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("$uri")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("/")]),a("span",{attrs:{class:"token keyword"}},[t._v("index")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"日志"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#日志","aria-hidden":"true"}},[this._v("#")]),this._v(" 日志")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("events")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("worker_connections")]),t._v("  "),a("span",{attrs:{class:"token number"}},[t._v("1024")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("http")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("include")]),t._v("       mime"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token keyword"}},[t._v("types")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("# 处理各种文件类型")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("log_format")]),t._v("  main  "),a("span",{attrs:{class:"token string"}},[t._v("'$remote_addr - $remote_user [$time_local] \"$request\" '")]),t._v("\n                     "),a("span",{attrs:{class:"token string"}},[t._v("'$status $body_bytes_sent \"$http_referer\" '")]),t._v("\n                     "),a("span",{attrs:{class:"token string"}},[t._v('\'"$http_user_agent" "$http_x_forwarded_for"\'')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("access_log")]),t._v("  "),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("Users"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("me"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("projects"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("official"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("site"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("dist"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("access"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("log  main"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("/")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v(" 访问日志\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("error_log")]),t._v("  "),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("Users"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("me"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("projects"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("official"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("site"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("dist"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("error"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("log"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("/")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v(" 错误日志\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("server")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("listen")]),t._v("       "),a("span",{attrs:{class:"token number"}},[t._v("80")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("location")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("root")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("Users"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("me"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("projects"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("official"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("site"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("dist"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("index")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("index")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("try_files")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("$uri")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("$uri")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("/")]),a("span",{attrs:{class:"token keyword"}},[t._v("index")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"ua-重定向"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ua-重定向","aria-hidden":"true"}},[this._v("#")]),this._v(" UA 重定向")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("events")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("worker_connections")]),t._v("  "),a("span",{attrs:{class:"token number"}},[t._v("1024")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("http")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("server")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("listen")]),t._v("       "),a("span",{attrs:{class:"token number"}},[t._v("80")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("$http_user_agent")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("~")]),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"(Android|iPhone|Windows Phone|UC|Kindle|iPad)"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("rewrite")]),t._v("  "),a("span",{attrs:{class:"token operator"}},[t._v("^")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token operator"}},[t._v("*")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("$  "),a("span",{attrs:{class:"token keyword"}},[t._v("https")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("baidu"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),a("span",{attrs:{class:"token variable"}},[t._v("$uri")]),t._v(" redirect"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"二级域名域名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二级域名域名","aria-hidden":"true"}},[this._v("#")]),this._v(" 二级域名域名")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("events")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("worker_connections")]),t._v("  "),a("span",{attrs:{class:"token number"}},[t._v("1024")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("http")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("server")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("server_name")]),t._v(" api"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("example"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("listen")]),t._v("  "),a("span",{attrs:{class:"token number"}},[t._v("80")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("$http_user_agent")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("~")]),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"(Android|iPhone|Windows Phone|UC|Kindle|iPad)"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("rewrite")]),t._v("  "),a("span",{attrs:{class:"token operator"}},[t._v("^")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token operator"}},[t._v("*")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("$  "),a("span",{attrs:{class:"token keyword"}},[t._v("https")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("baidu"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),a("span",{attrs:{class:"token variable"}},[t._v("$uri")]),t._v(" redirect"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考","aria-hidden":"true"}},[this._v("#")]),this._v(" 参考")])}],!1,null,null,null);s.default=e.exports}}]);