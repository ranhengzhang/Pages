const express = require('express');

const app = express();

app.get('/server?key=value', (require, response)=>{
    response.setHeader('Access-Control-Allow-Origin', '*'); // 设置允许跨域
    response.send('HELLO AJAX');
});

app.listen(8000, ()=>{
    console.log("服务已启动，8000端口监听中");
});
