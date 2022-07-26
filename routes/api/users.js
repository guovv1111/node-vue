//@ login & register
const express = require('express');
const router  = express.Router();
const bcrypt = require('bcrypt');

const  User = require("../../models/User")

// $router GET api/users/test
// @desc 返回请求的json数据
// @access public
router.get('/test', (req, res) => {
    res.json({msg: 'login success'})
})

// $router POST api/users/register
// @desc 返回请求的json数据
// @access public
// @body-parser  post请求需要install body-parser
router.post('/register', (req, res) => {
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    newUser.save()
    res.json(newUser)
        
    // 密码加密 install bcrypt
    // console.log(req.body)
    // 查询数据库中是否邮箱重复
    // User.findOne({email: req.body.email})
    // .then(user => {
    //     if(user) {
    //         return res.status(400).json({email: "邮箱已注册！"})
    //     } else {
    //         const newUser = new User({
    //             name: req.body.name,
    //             email: req.body.email,
    //             password: req.body.password
    //         });
    //         // 密码加密 install bcrypt
    //         bcrypt.genSalt(10, function(err, salt) {
    //             bcrypt.hash(newUser.password, salt, function(err, hash) {
    //                 if(err) throw err;
    //                 newUser.password = hash;
    //                 newUser.save()
    //                 .then(user => {
    //                     res.json(user)
    //                 })
    //                 .catch(err => {
    //                     console.log(err);
    //                 })
    //             });
    //        });
    //     }
    // })
})

// $router POST api/users/login
// @desc 返回请求的json数据
// @access public
// @body-parser  post请求需要install body-parser
router.post('/login', (req, res) => {
    const email  = req.body.email;
    const password = req.body.password;
    User.findOne({ email })
    .then(user => {
        if(!user) {
            return res.status(404).json({ email: "用户不存在！" })
        }
        bcrypt.compare(password, user.password).then(isMathch => {
            if(isMathch) {
                return res.json({msg: 'success'});
            } else {
                return res.status(404).json({password: '密码错误！'});
            }
        })
    })
})

module.exports = router;