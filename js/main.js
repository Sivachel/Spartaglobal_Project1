$(document).ready(function() {

// DOM objects into variables
  var animateWhole;
  var container = $('.mini');
  var highscore = $('.highscore');
  var yourscore = $('.yourscore');
  var line1 = $('#line1');
  var line2 = $('#line2');
  var line3 = $('#line3');
  var line4 = $('#line4');
  var car = $('#car');
  var car1 = $('#car_1');
  var car2 = $('#car_2');
  var car3 = $('#car_3');
  var car4 = $('#car_4');
  var Player2turn = $('.Player2turn');
  var restart = $('.restart');

// Moving user car up, down, right and left
// declaring initial variables
  var game_over = false;
  var move_left = false;
  var move_right = false;
  var move_up = false;
  var move_down = false;
// function when key is pressed
  $(document).on('keydown',function(e){
    if (game_over == false) {
      var key = e.keycode;
      if (key == 37 && move_left == false){
        move_left = requestAnimationFrame(left);
      } else if (key == 39 && move_right == false) {
        move_right = requestAnimationFrame(right);
      } else if (key == 38 && move_up == false) {
        move_up = requestAnimationFrame(up);
      } else if (key == 40 && move_down == false) {
        move_down = requestAnimationFrame(down);
      }
    }
  });
// function when key is not pressed
  $(document).on ('keyup', function(e){
    if (game_over == false){
      var key = e.keycode;
      if (key == 37) {
        move_left == cancelAnimationFrame(move_left);
        move_left = false;
      } else if (key == 39) {
        move_right = cancelAnimationFrame(move_right);
        move_right = false;
      } else if (key == 38) {
        move_up = cancelAnimationFrame(move_up);
        move_up = false;
      } else if (key == 40) {
        move_down = cancelAnimationFrame(move_down)
        move_down = false;
      }
    }
  });





});
