import './scss/input.scss';
import $ from "jquery";

$(document).ready(function() {
  // var counter = 0;
  // $(window).scroll(function() {
  //   console.log(counter);
  //   counter ++;
  //   $("#test").text(counter);
  // });
  var counter = 0;
  var maxScrollOut = 50;
  var firstDisappear = 30;
  $(".test").bind('mousewheel', function(event) {
    if((event.originalEvent.wheelDelta / 120 > 0) && (counter < maxScrollOut)) {
        console.log("up");
        if(counter === 49) {
          $(".content").css("display" , "block");
          // $("#background").css("opacity" , 0);
        }
        counter ++;
        $("#steps").css("transform" , "translateX(" + (counter*45) + "px) scale(" + (1+(counter/20)) + ")");
        $("#steps").css("opacity" , 1-(counter/firstDisappear));
        $("#mountain").css("transform", "translateX(-" + (counter*35) + "px) scale(" + (1+(counter/20)) + ")");
        $("#mountain").css("opacity" , 1-(counter/firstDisappear));
        $("#background").css("transform", "translateX(" + (counter*1) + "px) scale(" + (1+(counter/60)) + ")");
        $("#background").css("opacity" , 1-(counter/maxScrollOut));

    } else if ((event.originalEvent.wheelDelta / 120 <= 0) && (counter >= 1)) {
        console.log("down");
        if(counter === 50) {
          $(".content").css("display" , "none");
          // $("#background").css("opacity" , 1);
        }
        counter --;
        $("#steps").css("transform", "translateX(" + (counter*45) + "px) scale(" + (1+(counter/20)) + ")");
        $("#steps").css("opacity" , 1-(counter/firstDisappear));
        $("#mountain").css("transform", "translateX(-" + (counter*35) + "px) scale(" + (1+(counter/20)) + ")");
        $("#mountain").css("opacity" , 1-(counter/firstDisappear));
        $("#background").css("transform", "translateX(" + (counter*1) + "px) scale(" + (1+(counter/60)) + ")");
        $("#background").css("opacity" , 1-(counter/maxScrollOut));
    } else {
    }
    console.log(counter);
});
});
