// console.log("hello word!")
// setTimeout(() => {
//     console.log("3 seconds have passed")
// }, 3000);

// console.log(__dirname)
// console.log(__filename)

// function callFunction(fun, name) {
//     fun(name);
// }
// var sayBye = function (name) {
//     console.log(name+ ' Bye')
// }
// callFunction(sayBye, 'lailalaodi');

// var stuff = require('./count');//接收接口

// var pi = require('./count').pi;

// console.log(pi)

// console.log(stuff.counter(['ruby','nodejs','react']));

// console.log(stuff.adder(5, 10));

// console.log(stuff.pi);

//事件
// var events = require('events');//事件模块

// var myEmitter = new events.EventEmitter();//定义一个事件

// myEmitter.on('someEvent', function(message) {//绑定事件
//     console.log(message);
// })

// myEmitter.emit('someEvent', 'the event was emitted');//触发事件

// 文件读写
// var fs = require('fs');//文件系统模块

// var readMe = fs.readFileSync("readMe.txt", "utf8");//读文件，同步执行
// console.log(readMe);//1
// fs.writeFileSync("writeMe.txt", readMe);//写文件，并新建文件
// console.log("finished");//2

// var readMe = fs.readFile("readMe.txt","utf8", function (err, data) {//读文件，异步执行
//     console.log(data);//err为错误，data为读取的数据   2
// })
// console.log("finished");//1
// fs.writeFile("writeMe.txt", data, function() {//异步的写文件
//     console.log('writeMe has finished');
// })

// 文件删除
// var fs = require('fs');

// fs.unlink("writeMe.txt", () => {//异步的方法，推荐用异步的方法
//     console.log("delete writeMe.txt file");
// })
// fs.unlinkSync("writeMe.txt");//同步的方法

// 新建、删除目录
// var fs = require('fs');

// fs.mkdirSync('stuff');//新建目录，同步

// fs.rmdirSync('stuff');//删除目录，同步

//小功能
// var fs = require('fs');
//新建目录，读取文件，在目录中新建并写入文件
// fs.mkdir("stuff", function () {
//     fs.readFile('readMe.txt', function (err, data) {
//         fs.writeFile("./stuff/writeMe.txt", data, function () {
//             console.log("copy successfully!")
//         })
//     })
// })

// 流（两个优点：处理数据，提高性能）   
// var fs = require('fs');

// var myReadStream = fs.createReadStream(__dirname+'/readMe.txt', 'utf8');//创建一个读取输入流，也就是将文件读取到一个流中
// var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');//写文件流

// var data = "";//用来存储数据
// myReadStream.on('data', function (chunk) {//读数据
//     data += chunk;
//     myWriteStream.write(chunk);
// })

// myReadStream.on('end', function () {//读取完数据
//     console.log(data);
// })

// var writeData = "hello word";
// myWriteStream.write(writeData);
// myWriteStream.end();
// myWriteStream.on('finish', function () {
//     console.log("finished");
// })

// myReadStream.pipe(myWriteStream);//用管道来写，代替98~103行代码


// http
// var http = require('http');
// var fs = require('fs');

// var onRequest = function(request, response) {
//     console.log('Request received');
//     response.writeHead(200,{ 'Content-Type': 'text/html'});//返回json数据
//     //响应头随着返回的数据类型而改变，如果是纯文本类型：text/plain；如果是json：application/json；如果是html：text/html
    
//     // var myObj = {
//     //     name: "Wei",
//     //     job: "web",
//     //     age: 21
//     // }

//     var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');//创建流
//     myReadStream.pipe(response);//用管道，将myreadstream中的数据传输到response中


//     // response.write('Hello from out application');
//     // response.end(JSON.stringify(myObj));//可以不传参，然后加上上面一行代码, JSON序列化
// };



// var server = http.createServer(onRequest);//创建服务器

// server.listen(3000, '127.0.0.1');//监听3000端口
// console.log('Server start on localhost port 3000');

// 代码模块化
// var http = require('http');
// var fs = require('fs');
// function startServer() {
//     var onRequest = function(request, response) {
//         console.log('Request received');
//         response.writeHead(200,{ 'Content-Type': 'text/html'});//返回json数据
//         //响应头随着返回的数据类型而改变，如果是纯文本类型：text/plain；如果是json：application/json；如果是html：text/html
        
//         // var myObj = {
//         //     name: "Wei",
//         //     job: "web",
//         //     age: 21
//         // }
    
//         var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');//创建流
//         myReadStream.pipe(response);//用管道，将myreadstream中的数据传输到response中
    
    
//         // response.write('Hello from out application');
//         // response.end(JSON.stringify(myObj));//可以不传参，然后加上上面一行代码, JSON序列化
//     };
    
//     var server = http.createServer(onRequest);//创建服务器
    
//     server.listen(3000, '127.0.0.1');//监听3000端口
//     console.log('Server start on localhost port 3000');
// }

// exports.startServer = startServer;

//路由(不同的路由连接不同的页面)
// var http = require('http');
// var fs = require('fs');

// function startServer() {
//     var onRequest = function(request, response) {
//         console.log("Request received " + request.url);
//         if(request.url === '/' || request.url === '/home') {//判断路由，并且做出不同的响应
//             response.writeHead(200, { 'Content-Type': 'text/html'});
//             fs.createReadStream(__dirname +'/index.html', 'utf8').pipe(response);
//         } else if (request.url === '/review') {
//             response.writeHead(200, {'Content-Type': 'text/html'});
//             fs.createReadStream(__dirname + '/review.html', 'utf8').pipe(response);
//         } else if (request.url === '/api/v1/records') {
//             response.writeHead(200, { 'Content-Type': 'application/json'});
//             var jsonObj = {
//                 name: 'Wei'
//             }
//             response.end(JSON.stringify(jsonObj));
//         } else {
//             response.writeHead(200, { 'Content-Type': 'text/html'});
//             fs.createReadStream(__dirname + '/404.html', 'utf8').pipe(response);
//         }
//     };
    
//     var server = http.createServer(onRequest);//创建服务器
    
//     server.listen(3000, '127.0.0.1');//监听3000端口
//     console.log('Server start on localhost port 3000');
// }

// exports.startServer = startServer;

//将路由模块化
var http = require('http');
var fs = require('fs');
var url = require('url');
var querystring = require('querystring');//用来将string转为json

function startServer(route, handle) {
    var onRequest = function(request, response) {
        var pathname = url.parse(request.url).pathname;//用来过滤掉get传入的参数，只剩下纯路由
        //适用于GET取值
        // var params = url.parse(request.url, true).query;//用来过滤掉路由，只剩下传入的参数
        // route(handle, pathName, response, params);

        //适用于POST取值
        var data = "";
        request.on('error', function (err) {
            console.error(err);//如果出错，将错误打印出来
        }).on('data', function (chunk) {
            data += chunk;//如果有数据，将数据存到全局变量data中
        }).on('end', function () {
            if(request.method === 'POST') {//POST
                if(request.length > 1e6) {
                    request.connection.destory();//如果数据量过大，则取消此次请求
                }
                route(handle, pathname, response, querystring.parse(data));//将string类型的data转换我json类型
            } else if(request.method === 'GET') {//GET 
                var params = url.parse(request.url, true).query;
                route(handle, pathname, response, params)
            }
        })
        console.log("Request received " + pathname);
        // if(request.url === '/' || request.url === '/home') {//判断路由，并且做出不同的响应
        //     response.writeHead(200, { 'Content-Type': 'text/html'});
        //     fs.createReadStream(__dirname +'/index.html', 'utf8').pipe(response);
        // } else if (request.url === '/review') {
        //     response.writeHead(200, {'Content-Type': 'text/html'});
        //     fs.createReadStream(__dirname + '/review.html', 'utf8').pipe(response);
        // } else if (request.url === '/api/v1/records') {
        //     response.writeHead(200, { 'Content-Type': 'application/json'});
        //     var jsonObj = {
        //         name: 'Wei'
        //     }
        //     response.end(JSON.stringify(jsonObj));
        // } else {
        //     response.writeHead(200, { 'Content-Type': 'text/html'});
        //     fs.createReadStream(__dirname + '/404.html', 'utf8').pipe(response);
        // }
    };
    
    var server = http.createServer(onRequest);//创建服务器
    
    server.listen(3000, '127.0.0.1');//监听3000端口
    console.log('Server start on localhost port 3000');
}

module.exports.startServer = startServer;