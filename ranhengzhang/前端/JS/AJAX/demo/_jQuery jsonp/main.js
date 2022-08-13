const express = require('express');

const app = express();

app.all('/server', (request, response)=>{
    const data = {
        name: 'macabaca',
        city: ['北京', '上海', '深圳'],
    };
    let str = JSON.stringify(data);
    let cb = request.query.callback;
    response.send(`${cb}(${str})`);
});

app.listen(8000, ()=>{
    console.log("服务已启动，8000端口监听中");
});
