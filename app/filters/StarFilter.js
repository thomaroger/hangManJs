import angular from 'angular'

const StarFilter = angular.module('hangMan.StarFilter', [])
.filter('toStar', function(){
    return function(input = "", letters = []){
       return input
        .split("")
        .reduce(function (acc, letter) {
            return acc + (letters.indexOf(letter.toUpperCase()) !== -1 ? letter : "_") + " "
        }, "");
    }
}); 
export default StarFilter.name;