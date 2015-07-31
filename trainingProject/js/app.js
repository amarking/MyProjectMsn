/**
 * Created by ritesing on 7/29/2015.
 */

var sportsApp=angular.module('sportsApp',['ngRoute']);
sportsApp.config(function($routeProvider){
    $routeProvider.when('/',{
        controller:'sportsAppController',
        templateUrl:'../html/views/footballPage.html'
    })
        .when('/:sportName',{
            controller:'sportsAppController',
            templateUrl:'../html/views/footballPage.html'
        })
})