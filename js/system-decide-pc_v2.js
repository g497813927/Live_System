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
} else {
  var alert_change_to_mobile= document.getElementById("alert-change-to-mobile");
  alert_change_to_mobile.innerHTML="<div class=\"w3-animate-down alert alert-danger alert-dismissible show\" style=\"\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\" onclick=\"alert_hide_change_to_mobile(this)\">&times;</button>当前检测到您使用手机访问本站，为了能够正常观看，请前往<a href=\"./m.html\">https://zhibo.hgqjdst.org/</a>！</div>"
}