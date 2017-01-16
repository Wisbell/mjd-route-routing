console.log("app.js loaded")


var app = angular.module('', ['ngRoute'])



// Set up views
app.config(function($routeProvider){
    $routeProvider
    // .when('/', {
    //     controller: "",
    //     templateUrl: ""
    // })
    .when('/blueridge/', {
        controller: "BlueRidgeParkwayCtrl",
        templateUrl: "partials/blueridgeparkway.html"
    })
    .when('/route66', {
        controller: "Route66Ctrl",
        templateUrl: "partials/route66.html"
    })
})


// Controllers

// Homepage Controller
// app.controller('MainCtrl', function($scope){
//     console.log('MainCtrl controller')
// })



app.controller('BlueRidgeParkwayCtrl', function($scope){
    $scope.highwayName
    $scope.highwayDescription
})


app.controller('Route66Ctrl', function($scope){
    $scope.highwayName
    $scope.highwayDescription
})
