import angular from 'angular'
import route from 'angular-route'

import WordListController from './controllers/WordsController'
import WordController from './controllers/WordController'
import PlayController from './controllers/PlayController'
import StarFilter from './filters/StarFilter'
import WordsService from './services/WordsService'

var app = angular.module('hangMan', [
    WordsService,
    WordListController,
    WordController,
    PlayController,
    StarFilter,
    route 
    ]
)
.config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl: 'views/home.html',
        controller: 'WordListController',
        controllerAs: 'wordListController'
    })
    .when('/create',{
        templateUrl:'views/word.html',
        controller: 'WordController',
        controllerAs: 'wordController'
    })
    .when('/play/:id',{
        templateUrl:'views/play.html',
        controller: 'PlayController',
        controllerAs: 'playcontroller'
    })
    .otherwise({
        redirectTo:'/'
    })
});