/**
 * Created by ritesing on 7/27/2015.
 */

var storeApp=angular.module("storeApp",['ngRoute']);
storeApp.config(function($routeProvider){
    $routeProvider.when('/',{
        controller:'storeAppController',
        templateUrl:'../html/template/main.html'
    })
        .when('/home',{
                controller:'storeAppController',
                templateUrl:'../html/template/main.html'
    })
        .when('/checkout',{
            controller:'',
            templateUrl:'../html/template/checkout.html'
        })

});