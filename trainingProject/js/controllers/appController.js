/**
 * Created by ritesing on 7/29/2015.
 */

sportsApp.controller('sportsAppController',function($scope,sportsAppService,$routeParams){
 //$scope.sportsInfo=sportsAppService;
     sportsAppService.then(function(d){
         d= d.data;
         if($routeParams.sportName)
         {
             d =  d.filter(function (el) {
                 return el.sports === $routeParams.sportName;
             });
             console.log(d);
         }
         $scope.sportsInfo = d;
         console.log(d);
     });
 });
