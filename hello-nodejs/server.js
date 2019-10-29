var server = require('./app');
var route = require('./route');
var handler = require('./handler');

var handle = {};//用来存储路由，键为用户访问的路由路径，值为绑定的函数，用来处理路由返回；每添加一个路由，就在下面写一行数据，并且在handler.js中声明对应的处理函数。
handle["/"] = handler.home;
handle['/home'] = handler.home;
handle['/review'] = handler.review;
handle['/api/v1/records'] = handler.api_records;

server.startServer(route.route, handle);