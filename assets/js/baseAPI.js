// 在$.get()、$.post()、$.ajax()等方法"完全执行"之前，jQuery会先执行$.ajaxPrefilter()方法，它会做一些AJAX预先配置工作
// 比如把开发者指定的"配置对象"提供给其它AJAX方法
// 这个"配置对象"也会获取到$.get()、$.post()、$.ajax()等方法里面的options对象，并可以直接读取出来
// import "../lib/jquery";
$.ajaxPrefilter(function(options) {
  // 在login.js里面只给出接口的请求路径，需要在这里拼接上请求根路径才完整
  options.url = "http://www.liulongbin.top:3007" + options.url;


  // 统一为有权限的接口添加Authorization请求头
  if(options.url.indexOf("/my/") !== -1) {
    options.headers =  {
      Authorization: localStorage.getItem("token")
    }
  }
  

  // 统一配置complete回调函数
  options.complete = function(resObj) {
    // resObj["responseJSON"]就是服务器返回的JSON对象
    // resObj还有很多其它的属性，后期慢慢学习
    if(resObj["responseJSON"]["status"] === 1) {
      localStorage.removeItem("token");
      location.href = "./login.html";
    }
  }
});


