$(document).ready(function(){


  $('#form').submit(function(e){
    e.preventDefault();
    var paragraphs = parseInt($('#paragraphs').val());
    var words = parseInt($('#words').val());
    console.log(paragraphs);
    console.log(words);

    // jQuery.ajax example
    var getDinos = $.get('http://dinoipsum.herokuapp.com/api/?format=html&paragraphs=' + paragraphs + '&words=' + words),
        fillContainer = function(html) {
          $('.output').html(html);
        },
        oops = function() {
          console.log('Where did all the dinosaurs go?');
        };

    getDinos.then(fillContainer, oops);




  });
});
