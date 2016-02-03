import angular from 'angular'

const PlayController = angular.module('hangMan.PlayController', [])
    .controller('PlayController', function($routeParams, WordsService){
        "use strict";
        var playcontroller = this;
        playcontroller.letters = ['A'];
        WordsService.getWord($routeParams.id).then(
            function(word){
                playcontroller.word = word.word;
            }
        );;
        playcontroller.addLetter = function(){
            playcontroller.letters.push(playcontroller.letter.toUpperCase());
            playcontroller.letter = "";
        }
    });
export default PlayController.name;