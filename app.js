console.log("app.js loaded")


var app = angular.module('RouteApp', ['ngRoute'])



// Set up views
app.config(function($routeProvider){
    $routeProvider
    // .when('/', {
    //     controller: "",
    //     templateUrl: ""
    // })
    .when('/blueridge', {
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
    $scope.highwayName = "Blue Ridge Parkway"
    $scope.highwayDescription = `The Blue Ridge Parkway is a National Parkway and All-American Road in the United States,
                                 noted for its scenic beauty. The parkway, which is America's longest linear park,[3]
                                  runs for 469 miles (755 km) through 29 Virginia and North Carolina counties`
})


app.controller('Route66Ctrl', function($scope){
    $scope.highwayName = "Route 66"
    $scope.highwayDescription = `U.S. Route 66 (US 66 or Route 66), also known as the Will Rogers Highway, the Main Street of America or the Mother Road,
                                 was one of the original highways within the U.S. Highway System. US 66 was established on November 11, 1926, with road
                                  signs erected the following year.[4] The highway, which became one of the most famous roads in America`
})
