import './scss/input.scss';
import $ from "jquery";

$(document).ready(function() {

  var counter = 0;
  var maxScrollOut = 20;
  var firstDisappear = 13;
  var lastActiveCall = 0;
  $(".test").bind('mousewheel', function(event) {
    console.log(counter);
    var currentCall = new Date().getTime();
    var scrollDelay = currentCall - lastActiveCall;
    if (scrollDelay > 250 || scrollDelay < 210) {
      lastActiveCall = currentCall;
      if((event.originalEvent.wheelDelta / 120 > 0) && (counter < maxScrollOut)) {
        if(counter === 19) {
          $(".content").css("display", "block");
          $(".test").css("display", "none");
          $("*").css("overflow", "unset");
        }
        counter ++;
        $("#steps").css("transform" , "translateX(" + (counter*45) + "px) scale(" + (1+(counter/20)) + ")");
        $("#steps").css("opacity" , 1-(counter/firstDisappear));
        $("#mountain").css("transform", "translateX(-" + (counter*35) + "px) scale(" + (1+(counter/20)) + ")");
        $("#mountain").css("opacity" , 1-(counter/firstDisappear));
        $("#background").css("transform", "translateX(" + (counter*1) + "px) scale(" + (1+(counter/60)) + ")");
        // $("#background").css("opacity" , 1-(counter/maxScrollOut));

      } else if ((event.originalEvent.wheelDelta / 120 <= 0) && (counter >= 1)) {
        if(counter === 20) {
          $(".content").css("display" , "none");
          $(".test").css("display", "flex");
          $("*").css("overflow", "hidden");
        }
        counter --;
        $("#steps").css("transform", "translateX(" + (counter*45) + "px) scale(" + (1+(counter/20)) + ")");
        $("#steps").css("opacity" , 1-(counter/firstDisappear));
        $("#mountain").css("transform", "translateX(-" + (counter*35) + "px) scale(" + (1+(counter/20)) + ")");
        $("#mountain").css("opacity" , 1-(counter/firstDisappear));
        $("#background").css("transform", "translateX(" + (counter*1) + "px) scale(" + (1+(counter/60)) + ")");
        // $("#background").css("opacity" , 1-(counter/maxScrollOut));
      }
    } else {
      console.log(scrollDelay + " rejected");
    }
  });
});


// var allowScroll = "yes";
// trigger function() {
//   setTimeout(function () { allowa; }, 5)
//   delay .1 second: allowScroll = "no";
//   delay .4 second: allowScroll = "yes";
// }
//
// if (delayScroll === "yes") {
//   REGULAR FUNCTION
// } else {
//   NOTHING
// }
