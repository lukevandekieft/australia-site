import './scss/input.scss';
import $ from "jquery";

$(document).ready(function() {
var iScrollPos = 0;
  var counter = 0;
  $("#parent-container").scroll(function() {
    var iCurScrollPos = $(this).scrollTop();
    iScrollPos = iCurScrollPos;
    var windowHeight = $("#parent-container").height();
    var scrollPercent = iCurScrollPos / (5000 - windowHeight);
    $("#background").css("opacity", 1);
    $("#steps").css("transform" , "translateX(" + (scrollPercent*900) + "px) scale(" + (1+(1*scrollPercent)) + ")");
    $("#mountain").css("transform", "translateX(-" + (scrollPercent*700) + "px) scale(" + (1+(1*scrollPercent)) + ")");
    $("#background").css("transform", "translateX(" + (20 * scrollPercent) + "px) scale(" + (1+(.33*scrollPercent)) + ")");
    $("#mountain").css("opacity" , (1-(scrollPercent*1.54)));
    $("#steps").css("opacity" , (1-(scrollPercent*2)));
    console.log((1-scrollPercent));
    if (scrollPercent >= 1) {
      $("#background").css("opacity", 0);
    }
  });
  $(window).scroll(function() {
    var iCurScrollPos = $(this).scrollTop();
    console.log((iCurScrollPos));
    if (iCurScrollPos === 0) {
      $("#background").css("opacity", 1);
    } else {
      $("#background").css("opacity", 0);
      $("#mountain").css("opacity", 0);
      $("#steps").css("opacity", 0);
    }
  });
});

// COUNTER SCROLL ANIMATION FUNCTION
  // var counter = 0;
  // var contentCounter = 0;
  // var maxScrollOut = 21;
  // var firstDisappear = 13;
  // var lastActiveCall = 0;
  // $(".test").bind('mousewheel', function(event) {
  //   console.log(counter);
  //   var currentCall = new Date().getTime();
  //   var scrollDelay = currentCall - lastActiveCall;
  //   if (scrollDelay > 250 || scrollDelay < 210) {
  //     lastActiveCall = currentCall;
  //     if((event.originalEvent.wheelDelta / 120 > 0) && (counter >= 1)) {
  //       counter --;
  //       console.log("scroll up, mouse down (t)");
  //       $("#steps").css("transform", "translateX(" + (counter*45) + "px) scale(" + (1+(counter/20)) + ")");
  //       $("#steps").css("opacity" , 1-(counter/firstDisappear));
  //       $("#mountain").css("transform", "translateX(-" + (counter*35) + "px) scale(" + (1+(counter/20)) + ")");
  //       $("#mountain").css("opacity" , 1-(counter/firstDisappear));
  //       $("#background").css("transform", "translateX(" + (counter*1) + "px) scale(" + (1+(counter/60)) + ")");
  //
  //
  //     } else if ((event.originalEvent.wheelDelta / 120) < 0) {
  //       if(counter === 20) {
  //         console.log("here");
  //         $(".content").css("display", "block");
  //         $(".test").css("display", "none");
  //       } else {
  //         console.log("scroll down, mouse up (t)");
  //         $("#steps").css("transform" , "translateX(" + (counter*45) + "px) scale(" + (1+(counter/20)) + ")");
  //         $("#steps").css("opacity" , 1-(counter/firstDisappear));
  //         $("#mountain").css("transform", "translateX(-" + (counter*35) + "px) scale(" + (1+(counter/20)) + ")");
  //         $("#mountain").css("opacity" , 1-(counter/firstDisappear));
  //         $("#background").css("transform", "translateX(" + (counter*1) + "px) scale(" + (1+(counter/60)) + ")");
  //
  //         counter ++;
  //       }
  //     }
  //     $(".content").scrollTop(0);
  //   } else {
  //     console.log(scrollDelay + "zero");
  //   }
  // });

// WHEEL DELTA CALCULATED NORMAL SCROLL
  // $(".content").bind('mousewheel', function(event) {
  //   if(event.originalEvent.wheelDelta / 120 > 0) {
  //     if (contentCounter < -.2) {
  //       contentCounter = -.1;
  //       $(".content").css("display", "none");
  //       $(".test").css("display", "flex");
  //     } else if (contentCounter === -.1) {
  //       counter --;
  //       console.log(counter);
  //       $("#steps").css("transform", "translateX(" + (counter*45) + "px) scale(" + (1+(counter/20)) + ")");
  //       $("#steps").css("opacity" , 1-(counter/firstDisappear));
  //       $("#mountain").css("transform", "translateX(-" + (counter*35) + "px) scale(" + (1+(counter/20)) + ")");
  //       $("#mountain").css("opacity" , 1-(counter/firstDisappear));
  //       $("#background").css("transform", "translateX(" + (counter*1) + "px) scale(" + (1+(counter/60)) + ")");
  //     } else {
  //       contentCounter = contentCounter - Math.abs((event.originalEvent.wheelDelta/120));
  //     }
  //     console.log(contentCounter + " (c)")
  //   } else if (event.originalEvent.wheelDelta / 120 < 0) {
  //     contentCounter = contentCounter + Math.abs((event.originalEvent.wheelDelta/120));
  //     if (contentCounter > 60) {
  //       contentCounter = 60;
  //     }
  //   } else {
  //     console.log("zero movement" + event.originalEvent.wheelDelta)
  //   }
  // });

// SCROLL TOP WINDOW SWITCH
  // $(window).bind('mousewheel', function(event) {
  //
  //   if(event.originalEvent.wheelDelta / 120 > 0) {
  //     if($(window).scrollTop() == 0) {
  //       $(".content").css("display", "none");
  //       $(".test").css("display", "flex");
  //     }
  //      contentCounter --;
  //   } else if (event.originalEvent.wheelDelta / 120 < 0) {
  //     if($(window).scrollTop() + $(window).height() !== $(document).height()) {
  //        contentCounter ++;
  //     }
  //   }
  // });
