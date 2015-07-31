/**
 * Created by ritesing on 7/27/2015.
 */

storeApp.controller("storeAppController",function($scope,productService){
    $scope.catagories=productService;

    $scope.sortField="price";
    $scope.sortAscending=function(){
        $scope.sortField="price";
    }
    $scope.sortDescending=function(){
        $scope.sortField="-price";
    }

/*
    $scope.selectCategory=[];
    $scope.filterByCategory=function(){

    }
    $scope.addRemoveCategory=function(){

    }
*/
})