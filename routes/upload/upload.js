
const express = require('express');
const fs = require('fs');
const router  = express.Router();
var multer = require('multer');
/*
    multer
    用于处理 multipart/form-data 类型的表单数据
    主要用于上传
    Multer在解析完请求体后，会向Request对象中添加一个body对象和一个file或files对象（上传多个文件时使用files对象）
    其中，body对象中包含所提交表单中的文本字段（如果有）
    而file(或files)对象中包含通过表单上传的文件
*/
/**
 * Multer 接受一个 options 对象，其中最基本的是 dest 属性
 * 这将告诉 Multer 将上传文件保存在哪
 * 如果你省略 options 对象，这些文件将保存在内存中，永远不会写入磁盘
*/

router.post('/uploadImg', multer({
    // 设置文件存储路径
    dest: '../config/img'
}).single('file'), function (req, res, next) {
    console.log('upload---+++++++++++++++++++:', res, '----------------------------------+++++++++++')
    res.json({data:res})
    let files = req.files;
    let file = files[0];
    console.log('upload-------------:', file, '----------------------------------******************')
    let fileInfo = {};
    let path = 'config/img/' + Date.now().toString() + '_' + file.originalname;
    // fs.renameSync('../config/img' + file.filename, path);
    //获取文件基本信息
    fileInfo.type = file.mimetype;
    fileInfo.name = file.originalname;
    fileInfo.size = file.size;
    fileInfo.path = path;
    console.log('upload---+++++++++++++++++++:', fileInfo, '----------------------------------+++++++++++')
    res.json({
        code: 200,
        msg: 'OK',
        data: fileInfo
    })
});

module.exports = router;