//平台、设备和操作系统
var system = {
  win: false,
  mac: false,
  xll: false
};
//检测平台
var p = navigator.platform;
system.win = p.indexOf("Win") == 0;
system.mac = p.indexOf("Mac") == 0;
system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
if (system.win || system.mac || system.xll) {
		var type = navigator.appName;
　　if (type == "Netscape"){
    　　var lang = navigator.language;
　　}else{
    　　var lang = navigator.userLanguage;
　　};
　　var lang = lang.substr(0, 2);
　　if (lang == "zh"){
　　	var alert_change_to_pc= document.getElementById("alert-change-to-pc");
  alert_change_to_pc.innerHTML="<div class=\"w3-animate-down alert alert-danger alert-dismissible show\" style=\"\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\" onclick=\"alert_hide_change_to_pc(this)\">&times;</button>当前检测到您使用电脑访问本站，为了能够正常观看，请前往<a href=\"./pc.html\">https://live.hgqjdst.org/pc.html</a>！</div>"
　　}else if (lang == "en"){
   　　var alert_change_to_pc= document.getElementById("alert-change-to-pc");
  alert_change_to_pc.innerHTML="<div class=\"w3-animate-down alert alert-danger alert-dismissible show\" style=\"\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\" onclick=\"alert_hide_change_to_pc(this)\">&times;</button>Seems you are using PC to visit this site! In order to watch properly, please visit:<a href=\"./pc.html\">https://live.hgqjdst.org/global/pc.html</a>!</div>"
　　}else{
   　　var alert_change_to_pc= document.getElementById("alert-change-to-pc");
  alert_change_to_pc.innerHTML="<div class=\"w3-animate-down alert alert-danger alert-dismissible show\" style=\"\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\" onclick=\"alert_hide_change_to_pc(this)\">&times;</button>Seems you are using PC to visit this site! In order to watch properly, please visit:<a href=\"./pc.html\">https://live.hgqjdst.org/pc.html</a>!</div>"
　　}
} else {

  
}