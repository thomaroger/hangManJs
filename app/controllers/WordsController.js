import angular from 'angular'

const WordListController = angular.module('hangMan.WordListController', [])
    .controller('WordListController', function($rootScope, $scope, $timeout, WordsService){
        "use strict";
        var wordListController = this;
        var del;

        WordsService.getAllUperCase().then(
            function(words){
                wordListController.words = words;
            }
        );

        wordListController.deleteWord = function(id){
            var index  = null;
            angular.forEach(wordListController.words, function(value, key) {
                if(value.id === id) {
                    index = key;
                }
            });
            
            var backup = angular.copy(wordListController.words);
            wordListController.words.splice(index,1);
            del = $timeout(function(){
                WordsService.deleteWord(id).catch(function(){
                    wordListController.words = backup;
                });
            }, 3000);
        }
    });
export default WordListController.name;