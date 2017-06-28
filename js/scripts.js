// jQuery.ajax example
  Dino = function(paragraphs, words){
    this.paragraphs = paragraphs;
    this.words = words;
  };

Dino.prototype.getDinos = function(paragraphs, words){

  var dino = $.get('http://dinoipsum.herokuapp.com/api/?format=html&paragraphs=' + this.paragraphs + '&words=' + this.words),
    fillContainer = function(html) {
      $('.output').html(html);
    },
    oops = function() {
      console.log('Where did all the dinosaurs go?');
    }
    dino.then(fillContainer, oops);
};

exports.dinosModule = Dino;
