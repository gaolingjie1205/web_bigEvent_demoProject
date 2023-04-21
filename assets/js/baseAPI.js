// 在$.get()、$.post()、$.ajax()等方法"完全执行"之前，jQuery会先执行$.ajaxPrefilter()方法，它会做一些AJAX预先配置工作
// 比如把开发者指定的"配置对象"提供给其它AJAX方法
// 这个"配置对象"也会获取到$.get()、$.post()、$.ajax()等方法里面的options对象，并可以直接读取出来
// import "../lib/jquery";
$.ajaxPrefilter(function(options) {
  // console.log(options.url);
  // 在login.js里面只给出接口的请求路径，需要在这里拼接上请求根路径才完整
  options.url = "http://www.liulongbin.top:3007" + options.url;
});


