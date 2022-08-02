const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express(); // 实例化app

// 引入user.js
const users = require("./routes/api/users");

// DB config
const db = require("./config/keys").mongoURI;


//  使用body-parser中间件
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// connnect to mongdb
mongoose.connect(db)
.then(() => {
    console.log('mongdb connect++++++++++++++++++++++++++')
})
.catch(err => {
    console.log("-------------------------------------------------------",err,'----------------------------')
})


app.get('/', (req, res) => {
    res.send("hell")
})

// 通过中间件 使用routes
app.use('/api/users' ,users);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log('server running');
})