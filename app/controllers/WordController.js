import angular from 'angular'

const WordController = angular.module('hangMan.WordController', [])
    .controller('WordController', function($rootScope, $scope, $location, WordsService){
        "use strict";
        var wordController = this;

        wordController.addWord = function(){
            WordsService.addWord(wordController.word.name).then(
                function(data){
                    wordController.word.name= "";
                    $location.path("/#/");
                }); 
        }
    });
export default WordController.name;