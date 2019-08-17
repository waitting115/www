let arr = [];

this.onmessage = function (res) {
	let data = res.data;//接收到的数据
	arr.push(data);
	this.postMessage(arr);//发回数据
}