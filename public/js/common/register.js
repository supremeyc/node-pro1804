function registerModal(){
    this.addListener();
};
$.extend(registerModal.prototype,{
    // 注册事件监听
    addListener(){
        // 点击登录按钮
        $(".bb").on("click",this.registerHandler)
    },
    // 注册业务处理
    registerHandler(){
        // 待传送到服务器端的数据
        const data = $(".form_register").serialize();
        console.log(data);
        // ajax提交登录处理
        $.post("/users/register",data,(resData)=>{
            console.log(resData);
            if (resData.res_code === 1) {
                alert("注册成功");
                window.location.href = "/html/login.html";
            }else{
                $(".reg_failed").removeclass("hide");
            }
        },"json");
    }
});
new registerModal();