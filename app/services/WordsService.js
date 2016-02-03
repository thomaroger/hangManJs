import angular from 'angular'

const WordsService = angular.module('hangMan.WordsService', [])
.factory('WordsService', function($http, $rootScope){
    const api = 'http://192.168.40.189:3000/words';
    return {
        getAll : function() {
            return $http.get(api)
                .then(function successCallback(response) {
                    return response.data;
                })
                .then(function(words){
                    return words.filter(function(word){
                        return word.word;
                    })
                });
        },
        getAllUperCase : function() {
            //$rootScope.$emit('WordsService:getAllUperCase:Event', 'message');
            return this.getAll().then(function toUpperCase(data){
                    return data.map(function(elt){ 
                        elt.word = elt.word.toUpperCase();
                        return elt;
                    });
            })/*.then(function toStar(data){
                return data.map(function(elt){ 
                    elt.gameWord = '*'.repeat(elt.word.length);
                    return elt;
                });
            });*/
        },
        
        getWord : function(id){
             return $http.get(api+'/'+id)
                .then(function successCallback(response) {
                    return response.data;
                });
                
        },

        addWord : function(wordI){
            return $http.post(api, {word : wordI})
        },
        deleteWord : function(id){
             return $http.delete(api+'/'+id);
        }

    }
});

export default WordsService.name;