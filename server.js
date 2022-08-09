const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var cors = require("cors")
const app = express();
app.use(cors())

// 引入user.js
const users = require("./routes/api/users");
const menus = require("./routes/base/menu");
const upload = require("./routes/upload/upload");

// DB config
const db = require("./config/keys").mongoURI;

//  使用body-parser中间件
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// connnect to mongdb
mongoose.connect(db)
.then(() => {
    console.log('mongdb connected---------------');
})
.catch(err => {
    console.log('err', err)
})

app.get('/', (req, res) => {
    res.json({name:'hellow'})
})

// 通过中间件 使用routes
app.use('/api/users' ,users);
app.use('/base/menu' ,menus);
app.use('/upload/upload' ,upload);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log('server running');
})