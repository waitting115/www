//路由文件，用来处理路由的功能，指向等

var fs = require('fs');

function route(handle, pathname, response) {
    // console.log('Routing a request for' +pathname);
    if(typeof handle[pathname] === 'function') {//如果它是个函数，就说明在server.js中的handle对象中声明的这个路由
        handle[pathname](response);
    } else {//如果不是函数，就说明是未知的路由，返回404页面就好了
       response.writeHead(200, { 'Content-Type': 'text/html' });
       fs.createReadStream(__dirname + '/404.html','utf8').pipe(response);
    }
}

module.exports.route = route;