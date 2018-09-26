import './scss/input.scss';
import $ from "jquery";

$(document).ready(function() {

  var counter = 0;
  var contentCounter = 0;
  var maxScrollOut = 21;
  var firstDisappear = 13;
  var lastActiveCall = 0;
  $(".test").bind('mousewheel', function(event) {
    console.log(counter);
    var currentCall = new Date().getTime();
    var scrollDelay = currentCall - lastActiveCall;
    if (scrollDelay > 250 || scrollDelay < 210) {
      lastActiveCall = currentCall;
      if((event.originalEvent.wheelDelta / 120 > 0) && (counter >= 1)) {
        counter --;
        console.log("scroll up, mouse down (t)");
        $("#steps").css("transform", "translateX(" + (counter*45) + "px) scale(" + (1+(counter/20)) + ")");
        $("#steps").css("opacity" , 1-(counter/firstDisappear));
        $("#mountain").css("transform", "translateX(-" + (counter*35) + "px) scale(" + (1+(counter/20)) + ")");
        $("#mountain").css("opacity" , 1-(counter/firstDisappear));
        $("#background").css("transform", "translateX(" + (counter*1) + "px) scale(" + (1+(counter/60)) + ")");
        // $("#background").css("opacity" , 1-(counter/maxScrollOut));

      } else if ((event.originalEvent.wheelDelta / 120) < 0) {
        if(counter === 20) {
          console.log("here");
          $(".content").css("display", "block");
          $(".test").css("display", "none");
        } else {
          console.log("scroll down, mouse up (t)");
          $("#steps").css("transform" , "translateX(" + (counter*45) + "px) scale(" + (1+(counter/20)) + ")");
          $("#steps").css("opacity" , 1-(counter/firstDisappear));
          $("#mountain").css("transform", "translateX(-" + (counter*35) + "px) scale(" + (1+(counter/20)) + ")");
          $("#mountain").css("opacity" , 1-(counter/firstDisappear));
          $("#background").css("transform", "translateX(" + (counter*1) + "px) scale(" + (1+(counter/60)) + ")");
          // $("#background").css("opacity" , 1-(counter/maxScrollOut));
          counter ++;
        }
      }
      $(".content").scrollTop(0);
    } else {
      console.log(scrollDelay + "zero");
    }
  });

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



  $(window).bind('mousewheel', function(event) {

    if(event.originalEvent.wheelDelta / 120 > 0) {
      if($(window).scrollTop() == 0) {
        $(".content").css("display", "none");
        $(".test").css("display", "flex");
      }
      // contentCounter --;
    } else if (event.originalEvent.wheelDelta / 120 < 0) {
      if($(window).scrollTop() + $(window).height() !== $(document).height()) {
        // contentCounter ++;
      }
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
