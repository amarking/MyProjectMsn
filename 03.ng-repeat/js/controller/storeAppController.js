/**
 * Created by ritesing on 7/27/2015.
 */

storeApp.controller("storeAppController",function($scope){
    $scope.catagories=
        [
        {
            catName:"Shoes",
            productList:[
                {
                    name:"Shoes1",
                    image:"../img/shoes1.jpg",
                    price:"2200"
                },
                {
                    name:"Shoes2",
                    image:"../img/shoes1.jpg",
                    price:"1999"
                },
                {
                    name:"Shoes3",
                    image:"../img/shoes1.jpg",
                    price:"1235"
                }
            ]
        },
        {
            catName:"Shuttle",
            productList:[
                {
                    name:"Shuttle1",
                    image:"../img/potm.jpg",
                    price:"2800"
                },
                {
                    name:"Shuttle2",
                    image:"../img/potm.jpg",
                    price:"1999"
                },
                {
                    name:"Shuttle3",
                    image:"../img/potm.jpg",
                    price:"1335"
                }
            ]
        },
            {
                catName:"Racket",
                productList:[
                    {
                        name:"Racket1",
                        image:"../img/racket.jpg",
                        price:"220"
                    },
                    {
                        name:"Racket2",
                        image:"../img/racket.jpg",
                        price:"499"
                    },
                    {
                        name:"Racket3",
                        image:"../img/racket.jpg",
                        price:"335"
                    }
                ]
            }

    ]

    $scope.sortField="price";
    $scope.sortAscending=function(){
        $scope.sortField="price";
    }
    $scope.sortDescending=function(){
        $scope.sortField="-price";
    }


    $scope.selectCategory=[];
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

})