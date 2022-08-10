const express = require('express');
const router  = express.Router();

const  menu = require("../../config/mock")

// $router GET base/menu/menu
// @desc 返回请求的json数据
// @access public
router.get('/menu', (req, res) => {
    res.json(menu)
})
module.exports = router;