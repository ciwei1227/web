const http = require('http');

// 创建一个 HTTP 服务器
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    if (req.method === 'GET' && req.url === '/') {
        res.end('欢迎使用 Node.js HTTP 服务器！\n');
    } else {
        res.statusCode = 404;
        res.end('404 Not Found\n');
    }
});

// 监听端口 3000
const port = 3000;
server.listen(port, () => {
    console.log(`服务器正在运行，访问 http://localhost:${port}/`);
});