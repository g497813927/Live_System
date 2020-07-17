	var liveStart = new Date(2019, 11, 15, 18, 0, 0, 0);
	var liveEnd = new Date(2019, 11, 15, 21, 0, 0, 0);
	var odate=new Date();
    var nowYear=odate.getFullYear();  
    var nowMonth=odate.getMonth()+1; 
    var nowDate=odate.getDate();  
    var nowDay=odate.getDay();  
    var nowHours=odate.getHours();   
    var nowMinutes=odate.getMinutes();  
    
    if(odate>=liveStart&& odate<=liveEnd){
    	var alert_live_offline= document.getElementById("alert-live-offline");
    	alert_live_offline.classList.add("fade");
		alert_live_offline.classList.remove("show");
    	setTimeout(function(){alert_live_offline.parentNode.removeChild(alert_live_offline);},800);
    }else{
    	console.log("%c%s","color:red;font-size:30px;","直播已经结束或者还未开始");
    }
   