//使用express构建web服务器
const express = require('express');
const bodyParser = require('body-parser');
/*引入路由模块*/
const index=require("./routes/index");
const details=require("./routes/details");
const users=require("./routes/users");


var app = express();
var server = app.listen(4000);
//使用body-parser中间件
app.use(bodyParser.urlencoded({extended:false}));
//托管静态资源到public目录下
app.use(express.static('public'));
/*使用路由器来管理路由*/
app.use("/index",index);
app.use("/details",details);
app.use("/users",users)
