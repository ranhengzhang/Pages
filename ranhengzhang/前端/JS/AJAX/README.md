# AJAX

## 特点

### 优点

-   可以无需刷新页面而与服务器端进行通信
-   允许你根据用户事件来更新部分页面内容

### 缺点

-   没有浏览历史，不能回退
-   存在跨域问题（同源）
-   SEO不友好

## 跨域问题

如果使用`jsonp`，因为`script`标签会报错，无法正常获取数据，所以使用以下方式：

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>取消请求</title>
  <style>
    #result {
      width: 200px;
      height: 100px;
      border: #90b 1px solid;
    }
  </style>
</head>
<body>
<div id="result"></div>
<script>
  function handle(data) {
    const result = document.getElementById('result');
    result.innerHTML = data.name;
  }
</script>
<script src="http://localhost:8000/server"></script>
</body>
</html>
```

```javascript
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
```
