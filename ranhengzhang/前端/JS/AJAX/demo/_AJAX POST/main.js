const express = require('express');

const app = express();

// app.get('/server', (require, response)=>{
//     response.setHeader('Access-Control-Allow-Origin', '*'); // 设置允许跨域
//     response.send('HELLO AJAX GET');
// });
//
// app.post('/server', (require, response)=>{
//     response.setHeader('Access-Control-Allow-Origin', '*'); // 设置允许跨域
//     response.setHeader('Access-Control-Allow-Headers', '*'); // 允许自定义头
//     response.send('HELLO AJAX POST');
// });

app.all('/server', (require, response)=>{
    response.setHeader('Access-Control-Allow-Origin', '*'); // 设置允许跨域
    response.setHeader('Access-Control-Allow-Headers', '*'); // 允许自定义头
    response.send('HELLO AJAX');
});

app.listen(8000, ()=>{
    console.log("服务已启动，8000端口监听中");
});
