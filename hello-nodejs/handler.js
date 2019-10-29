// handler.js用来操作那些请求

var fs = require('fs');

function home(response) {
    response.writeHead(200, { 'Content-Type': 'text/html'});
    fs.createReadStream(__dirname +'/index.html', 'utf8').pipe(response);
}

function review(response) {
    response.writeHead(200, { 'Content-Type': 'text/html'});
    fs.createReadStream(__dirname +'/review.html', 'utf8').pipe(response);
}

function api_records(response, params) {//params是路由传入的参数
    response.writeHead(200, { 'Content-Type': 'application/json'});
    var jsonObj = {
        name: 'Wei'
    }
    response.end(JSON.stringify(params));
}

module.exports = {
    home: home,
    review: review,
    api_records: api_records
}