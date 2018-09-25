import './scss/input.scss';
import $ from "jquery";

$(document).ready(function() {
  var counter = 0;
  $(window).scroll(function() {
    console.log(counter);
    counter ++;
    $("#test").text(counter);
  });
});
