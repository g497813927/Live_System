        var player = new Aliplayer({
  "id": "player-con",
  "source": "https://livepull.techzjc.com/hgqjdst/talentshow.m3u8?auth_key=1576447900-0-0-77b8722442414bb73367a6da022e6fa9", //这里改成正式直播地址
  "width": "100%",
  "height": "500px",
  "autoplay": false,
  "isLive": true,
  "rePlay": true,
  "playsinline": true,
  "preload": true,
  "language": "zh-cn",
  "controlBarVisibility": "hover",
  "videoWidth": "1920",
  "useH5Prism": true,
  "extraInfo": {
    "crossOrigin": "anonymous"
  },
  "skinLayout": [
    {
      "name": "bigPlayButton",
      "align": "blabs",
      "x": 30,
      "y": 80
    },
    {
      "name": "errorDisplay",
      "align": "tlabs",
      "x": 0,
      "y": 0
    },
    {
      "name": "infoDisplay"
    },
    {
      "name": "controlBar",
      "align": "blabs",
      "x": 0,
      "y": 0,
      "children": [
        {
          "name": "liveDisplay",
          "align": "tlabs",
          "x": 15,
          "y": 6
        },
        {
          "name": "fullScreenButton",
          "align": "tr",
          "x": 10,
          "y": 10
        },
        {
          "name": "setting",
          "align": "tr",
          "x": 15,
          "y": 12
        },
        {
          "name": "volume",
          "align": "tr",
          "x": 5,
          "y": 10
        },
        {
          "name": "snapshot",
          "align": "tr",
          "x": 10,
          "y": 12
        }
      ]
    }
  ]
}, function (player) {
    console.log("播放器加载成功！");
  }
);
player.on('snapshoted', function (data) {
  var pictureData = data.paramData.base64
  var downloadElement = document.createElement('a')
  downloadElement.setAttribute('href', pictureData)
  var fileName = '杭高钱江电视台-截图' + Date.now() + '.png'
  downloadElement.setAttribute('download', fileName)
  downloadElement.click()
  pictureData = null
})
var type = navigator.appName;
if (type == "Netscape"){
	var lang = navigator.language;
	
}else{
	var lang = navigator.userLanguage;
	
}
var lang = lang.substr(0, 2);
if (lang == "zh"){
	console.log("%c%s","color:red;font-size:30px;","底部有彩蛋！\n不过单单找到底部的彩蛋是不够的，\n你还要成功地解密它，\n不然就算发送也是没用的XD(来自彩蛋放置人&平台站长的小提示：\n标签使用js的几种常用加密方式之一的方式进行加密!\n如果不知道，欢迎询问度娘、bing、谷歌~)");
	console.log("%c%s","color:green;font-size:24px;","\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n还有一点点就到了!\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n就差一点!\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n再往上翻!\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n我绝对不会告诉你上面有对于底部彩蛋的提示!\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
	console.log("%c%s","color:blue;font-size:24px;","Σ(っ°Д°;)っ隐藏的这么深，居然还是被你找到了！\n骚年，看起来你也很喜欢代码！\n要不，加入电视台，\n一起进行维护这一个站点的代码吧！\n发邮件至hgqjdst@vip.techzjc.com，\n并在前面标注：");
	console.log("%c%s","color:green;font-size:24px;","44CQ5p2l6Ieq55u05pKt5bmz5Y+w44CR44CQVEVDSFpKQ+OAkQ==");
	console.log("%c%s","color:blue;font-size:24px;","这两个标签，进入快速申请通道吧！\n杭高钱江电视台期待你的加入！");
	console.log("%c%s","color:red;background-color:yellow;font-size:30px;","Err,标签显示出现异常了，\n你可能还要再进行一小下转换\n才能够获得真正的标签内容!");
　　}else{
　　console.log("%c%s","color:red;font-size:30px;","There is an Easter Egg below.\nBut it is not means the all\nYou need to decrypt it!\nOtherwise, even though you sent the email\nYou still need to wait as the normal way!XD\nHint:\nTag uses one of the JavaScript Encrypt Method,\nYou may use Google, or more securely, use Duckduckgo for help!");
　　console.log("%c%s","color:green;font-size:24px;","\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n Scroll more!\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nMore!\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nScroll more!\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nI would not tell you that there is an Easter Egg above!\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
　　console.log("%c%s","color:green;font-size:24px;","Σ(っ°Д°;)っYou find the easter egg for the site!\nIt seems that you really love coding!\nWhy not join the site,\nmake the site better!\nWhat you need is to email me at hgqjdst@vip.techzjc.com\nand adding the tag");
　　console.log("%c%s","color:green;font-size:24px;","W0Zyb20gTGl2ZSBzeXN0ZW1dW3RlY2h6amNd");
　　console.log("%c%s","color:blue;font-size:24px;","Then you are in the high way of getting examine!\nWelcome to join Hangzhou High School TV Station Qianjiang Division!");
　　console.log("%c%s","color:red;background-color:yellow;font-size:30px;","Ops!\nI forgot to tell you one thing:\nTags which shows above are not the final answer!\nYou may need to convert it to get its answers!");
　　}

