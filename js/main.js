$(document).ready(function() {

// DOM objects into variables
  var animateWhole;
  var container = $('.container');
  var highscore = $('.highscore');
  var yourscore = $('.yourscore');
  var line_1 = $('#line_1');
  var line_2 = $('#line_2');
  var line_3 = $('#line_3');
  var line_4 = $('#line_4');
  var car = $('#car');
  var car_1 = $('#car_1');
  var car_2 = $('#car_2');
  var car_3 = $('#car_3');
  var car_4 = $('#car_4');
  var player2turndiv = $('#player2turndiv').hide();
  var player2turn_btn = $('#player2turn');
  var restart_div = $('#restart_div').hide();
  var restart_btn = $('#restart');

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
      var key = e.keyCode;
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
  $(document).on('keyup', function(e){
    if (game_over == false){
      var key = e.keyCode;
      if (key == 37) {
        move_left = cancelAnimationFrame(move_left);
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
  var container_left = parseInt(container.css('left'));
  var container_width = parseInt(container.width());
  var container_height = parseInt(container.height());
  var car_width = parseInt(car.width());
  var car_height = parseInt(car.height());
  var score_counter = 1;
  var speed = 2;
  var line_speed = 5;
// function for controls
  function left() {
    if (game_over == false && parseInt(car.css('left')) > 0) {
      car.css('left', parseInt(car.css('left')) - 5);
      move_left = requestAnimationFrame(left);
    }
  }
  function right() {
    if (game_over == false && parseInt(car.css('left')) < container_width - car_width) {
      car.css('left',parseInt(car.css('left')) + 5);
      move_right = requestAnimationFrame(right);
    }
  }
  function up() {
    if (game_over == false && parseInt(car.css('top')) > 0) {
      car.css('top',parseInt(car.css('top')) - 3);
      move_up = requestAnimationFrame(up);
    }
  }
  function down() {
    if (game_over == false && parseInt(car.css('top')) < container_height - car_height) {
      car.css('top',parseInt(car.css('top')) + 3);
      move_down = requestAnimationFrame(down);
    }
  }
// Repeat function for tracks and other cars
  animateWhole = requestAnimationFrame(repeat);
  function repeat() {
    if (collision(car,car_1) || collision(car,car_2) || collision(car,car_3) || collision(car,car_4)){
      stop_game();
      return;
    }
    score_counter++;
    if (score_counter % 10 == 0) {
      yourscore.text(parseInt(yourscore.text()) + 1);
    }
    if (score_counter % 250 == 0) {
      speed++;
      line_speed++;
    }

    car_down(car_1);
    car_down(car_2);
    car_down(car_3);
    car_down(car_4);
    line_down(line_1);
    line_down(line_2);
    line_down(line_3);
    line_down(line_4);

    animateWhole = requestAnimationFrame(repeat);
    }

  function car_down(car) {
    var car_current_top = parseInt(car.css('top'));
    if (car_current_top > container_height) {
      car_current_top = -200;
      var car_left = parseInt(Math.random() * (container_width - car_width));
      car.css('left', car_left);
    }
    car.css('top', car_current_top + speed)
  }
  function line_down(line) {
    var line_current_top = parseInt(line.css('top'));
    if (line_current_top > container_height) {
      line_current_top = -100;
    }
    line.css('top', line_current_top + line_speed);
  }
  restart_btn.click(function(){
  location.reload();
});
  // player2player2turn_btn.click(function(){
  // requestAnimationFrame(repeat);
  // })
  function stop_game() {
    game_over = true;
    cancelAnimationFrame(animateWhole);
    cancelAnimationFrame(move_left);
    cancelAnimationFrame(move_up);
    cancelAnimationFrame(move_down);
    cancelAnimationFrame(move_right);
    restart_div.slideDown();
    restart_btn.focus();
    player2turndiv.slideDown();
  }

  function collision($div1, $div2) {
    var x1 = $div1.offset().left;
    var y1 = $div1.offset().top;
    var h1 = $div1.outerHeight(true);
    var w1 = $div1.outerWidth(true);
    var b1 = y1 + h1;
    var r1 = x1 + w1;
    var x2 = $div2.offset().left;
    var y2 = $div2.offset().top;
    var h2 = $div2.outerHeight(true);
    var w2 = $div2.outerWidth(true);
    var b2 = y2 + h2;
    var r2 = x2 + w2;

    if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
    return true;
  }


});
