var Dino = require ("./../js/scripts.js").dinosModule;

$(document).ready(function(){


  $('#form').submit(function(e){
    e.preventDefault();
    var paragraphs = parseInt($('#paragraphs').val());
    var words = parseInt($('#words').val());
    var newDino = new Dino(paragraphs, words);
    newDino.getDinos();
    console.log(paragraphs);
    console.log(words);
  });
});
