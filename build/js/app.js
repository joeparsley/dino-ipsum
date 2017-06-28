(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
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

},{"./../js/scripts.js":1}]},{},[2]);
