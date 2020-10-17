
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/main/main","pages/login/login","pages/reg/reg","pages/pwd/pwd","pages/user/user","pages/leave_word/leave_word","pages/options/options","pages/log/update_log","pages/friend/request_add_friend_list","pages/uni-center","pages/search/search_users","pages/friend/friends_list","pages/test","pages/friend/chat"],"window":{"navigationBarTextStyle":"white","navigationBarBackgroundColor":"#0faeff","backgroundColor":"#fbf9fe","type":"transparent"},"tabBar":{"color":"#7a7e83","selectedColor":"#0faeff","backgroundColor":"#ffffff","list":[{"pagePath":"pages/main/main","text":"首页","iconPath":"static/img/home.png","selectedIconPath":"static/img/homeHL.png"},{"pagePath":"pages/user/user","text":"我的","iconPath":"static/img/user.png","selectedIconPath":"static/img/userHL.png"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"以太","compilerVersion":"2.8.11","entryPagePath":"pages/main/main","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/main/main","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"首页","enablePullDownRefresh":true,"titleNView":{"buttons":[{"text":"","fontSrc":"/static/iconfont.ttf","fontSize":"25","float":"left","color":"#fff"}]}}},{"path":"/pages/login/login","meta":{},"window":{"navigationBarTitleText":"登录"}},{"path":"/pages/reg/reg","meta":{},"window":{"navigationBarTitleText":"注册"}},{"path":"/pages/pwd/pwd","meta":{},"window":{"navigationBarTitleText":"找回密码"}},{"path":"/pages/user/user","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"我的"}},{"path":"/pages/leave_word/leave_word","meta":{},"window":{"navigationBarTitleText":"留言"}},{"path":"/pages/options/options","meta":{},"window":{"navigationBarTitleText":"选项"}},{"path":"/pages/log/update_log","meta":{},"window":{"navigationBarTitleText":"更新日志"}},{"path":"/pages/friend/request_add_friend_list","meta":{},"window":{"navigationBarTitleText":"好友"}},{"path":"/pages/uni-center","meta":{},"window":{"navigationBarTitleText":"测试"}},{"path":"/pages/search/search_users","meta":{},"window":{"navigationBarTitleText":"测试"}},{"path":"/pages/friend/friends_list","meta":{},"window":{"navigationBarTitleText":"测试"}},{"path":"/pages/test","meta":{},"window":{"navigationBarTitleText":"测试"}},{"path":"/pages/friend/chat","meta":{},"window":{"navigationBarTitleText":"聊天"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
