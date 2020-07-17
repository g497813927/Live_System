/*Start menu animation part*/
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
/*End menu animation part*/

/*Start alert animation part*/

function alert_translation(obj){
  	var alert_translation= document.getElementById("alert-translation");
    alert_translation.classList.add("fade");
	alert_translation.classList.remove("show");
    setTimeout(function(){alert_translation.parentNode.removeChild(alert_translation);},800)
  }
function alert_hide_flash(obj){
  	var alert_flash= document.getElementById("alert-flash");
    alert_flash.classList.add("fade");
	alert_flash.classList.remove("show");
    setTimeout(function(){alert_flash.parentNode.removeChild(alert_flash);},800)
  }
function alert_hide_live_offline(obj){
  	var alert_live_offline= document.getElementById("alert-live-offline");
    alert_live_offline.classList.add("fade");
	alert_live_offline.classList.remove("show");
    setTimeout(function(){alert_live_offline.parentNode.removeChild(alert_live_offline);},800)
  }
function alert_hide_change_to_pc(obj){
  	var alert_change_to_pc= document.getElementById("alert-change-to-pc");
    alert_change_to_pc.classList.add("fade");
	alert_change_to_pc.classList.remove("show");
    setTimeout(function(){alert_change_to_pc.parentNode.removeChild(alert_change_to_pc);},800)
  }
function alert_hide_change_to_mobile(obj){
  	var alert_change_to_mobile= document.getElementById("alert-change-to-mobile");
    alert_change_to_mobile.classList.add("fade");
	alert_change_to_mobile.classList.remove("show");
    setTimeout(function(){alert_change_to_mobile.parentNode.removeChild(alert_change_to_mobile);},800)
  }

function alert_hide_comment(obj){
  	var alert_comment= document.getElementById("alert-comment");
    alert_comment.classList.add("fade");
	alert_comment.classList.remove("show");
    setTimeout(function(){alert_comment.parentNode.removeChild(alert_comment);},800)
  }
  function alert_hide_video(obj){
  	var alert_video= document.getElementById("alert-video");
    alert_video.classList.add("fade");
	alert_video.classList.remove("show");
    setTimeout(function(){alert_video.parentNode.removeChild(alert_video);},800)
  }
/*End alert animation part*/

/*Start back to top animation part*/
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 
/*End back to top animation part*/