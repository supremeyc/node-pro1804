const express = require('express');
const router = express.Router();
const UserService = require("../service/user_service.js");


// 用户登录
router.post("/login",function(req,res,next){
  res.send("用户登录处理")
});
// 用户注册
router.post("/register",UserService.register
);
module.exports = router;
