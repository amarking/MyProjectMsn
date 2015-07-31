/*
 Created by ritesing on 7/29/2015.
 */
sportsApp.service('sportsAppService',function($http){
    var a=  $http.get("../js/data/jsonData.json").success(function(response){
                return response;
            });
    return a;
    });


    /*[
        {
            sports:"Football",
            fixture:[
                {
                    date:"22 August",
                    time:"00:00",
                    team1:"Malaga",
                    logo1:"../img/logo1.png",
                    team2:"sevilla",
                    logo2:"../img/logo2.png"
                },
                {
                    date:"23 August",
                    time:"22:00",
                    team1:"Deportivo de La Coruña",
                    logo1:"../img/logo2.png",
                    team2:"Real Sociedad",
                    logo2:"../img/logo1.png"
                },
                {
                    date:"24 August",
                    time:"13:00",
                    team1:"Atlético de Madrid",
                    logo1:"../img/logo2.png",
                    team2:"Las Palmas",
                    logo2:"../img/logo1.png"
                },
                {
                    date:"24  August",
                    time:"20:20",
                    team1:"Rayo Vallecano",
                    logo1:"../img/logo1.png",
                    team2:"Valencia CF",
                    logo2:"../img/logo2.png"
                }
            ]
        },
        {
            sports:"Tennis",
            fixture:[
                {
                    date:"22 August",
                    time:"22:00",
                    team1:"Pablo Cuevas (5)",
                    team2:"Jerzy Janowicz"
                },
                {
                    date:"23 August",
                    time:"17:00",
                    team1:"JAndreas Seppi",
                    team2:"Florian Mayer"
                }
            ]
        }
    ]
    */
