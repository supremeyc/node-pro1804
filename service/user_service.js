
const UserData  = require("../database/user_data.js");

const UserService={
    login(){

    },
    register(req,res,next){
        // 获取在请求中的注册信息
        const {username,password} = req.body;
        // 保存用户对象
        UserData
        .sava({username,password})
        .then((data)=>{
            res.json({res_code:1,res_err:"",res_body:data});
        })
        .catch((err)=>{
            res.json({res_code:-1,res_err:err,res_body:{}});
        });
    }
};
// 导出
module.exports=UserService;