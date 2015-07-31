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




/*    $scope.selectCategory=[];
    for(var i=0;i<=$scope.catagories.length;i++){
        $scope.selectCategory.push($scope.catagories[i].catName);
    }

    $scope.filterByCategory=function(catagory){
        return  $scope.selectCategory.indexOf(catagory.catName)!==-1;
    }
    $scope.addRemoveCategory=function(cat){
        var index=$scope.selectCategory.indexOf(cat);
        if(index > -1){
            $scope.selection.splice(i,1);
        }
        else{
            $scope.selectCategory.push(cat);
        }

    }
    */
    })