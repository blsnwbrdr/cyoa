$(document).ready(function() {
  'use strict';
  // initial story and buttons for the first choice
  $('#image').attr('src',story[0].image);
  $('#story').html(story[0].text);
  $('#1').text(story[0].button1);
  $('#2').text(story[0].button2);
  $('#1,#2').css('display',story[0].display);
  // counter variable start
  var start = 0;
  // choice 1
  $('#1').click(function() {
    var x = (start + '1');
    // testing the function counter
    console.log(x);
    for (var i = 0; i < story.length; i++ ) {
      if ( x === story[i].story) {
        start = story[i].story;
        if ( story[i].image === '') {
          $('#image').attr('src',story[0].image);
        } else {
          $('#image').attr('src',story[i].image);        
        }
        $('#story').html(story[i].text);
        $('#1').text(story[i].button1);
        $('#2').text(story[i].button2);
        $('#1,#2').css('display',story[i].display);
        return;
      } else {
      }
    }
  });
  //choice 2
  $('#2').click(function() {
    var x = (start + '2');
    // testing the function counter
    console.log(x);
    for (var i = 0; i < story.length; i++ ) {
      if ( x === story[i].story) {
        start = story[i].story;   
        if ( story[i].image === '') {
          $('#image').attr('src',story[0].image);
        } else {
          $('#image').attr('src',story[i].image);        
        }        
        $('#story').html(story[i].text);
        $('#1').text(story[i].button1);
        $('#2').text(story[i].button2);
        $('#1,#2').css('display',story[i].display);
        return;
      } else {
      }
    }
  });
}); // end jquery