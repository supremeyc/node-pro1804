// 引入mongoose
const mongoose = require("mongoose");
// 连接数据库
 mongoose.connect('mongodb://localhost/pro1804');
 
//  用户模型
const User = mongoose.model("user",{
    username: String,
	password: String
});

// 导出
module.exports={User};