// 头部对象
function Header() {
    this.createDom();
}
// 头部导航模板
Header.template=`<nav class="navbar navbar-default">
<div class="container-fluid">
  <!-- Brand and toggle get grouped for better mobile display -->
  <div class="navbar-header">
    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
      <span class="sr-only">Toggle navigation</span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </button>
    <a class="navbar-brand" href="#">Piracy blog</a>
  </div>

  <!-- Collect the nav links, forms, and other content for toggling -->
  <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
    <ul class="nav navbar-nav">
      <li class="active"><a href="/index.html">首页<span class="sr-only">(current)</span></a></li>
      <li><a href="/html/position.html">个人主页</a></li>
    </ul>
    <ul class="nav navbar-nav navbar-right">
      <li><a href="/html/login.html">登录</a></li>
         <li><a href="/html/register.html">注册</a></li>
    </ul>
  </div><!-- /.navbar-collapse -->
</div><!-- /.container-fluid -->
</nav>`;
// 构造函数加原型 extendjquery中扩展方法
$.extend(Header.prototype,{
    // 创建DOM元素
    createDom(){
        $(Header.template).appendTo("header");
    }
});

// 创建对象实例
new Header();