const express = require('express');
const history = require('connect-history-api-fallback');

const app = express();
app.use(history())
app.use(express.static(__dirname+'/static'))

app.get('/person', (req, res) => {
    res.send({
        name: 'John',
        age: 34,
    })
})

app.listen(6362, (error)=>{
    if (!error) {
        console.log('服务器启动成功了')
    }
})
