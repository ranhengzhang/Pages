const express = require('express');

const app = express();

app.all('/server', (require, response)=>{
    const data = {
        name: 'macabaca'
    };
    let str = JSON.stringify(data);
    response.send(`handle(${str})`);
});

app.listen(8000, ()=>{
    console.log("服务已启动，8000端口监听中");
});
