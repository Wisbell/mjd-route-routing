console.log("app.js loaded")


var app = angular.module('', ['ngRoute'])



// Set up views
app.config(function($routeProvider){
    $routeProvider
    .when('/', {
        controller: "",
        templateUrl: ""
    })
    .when('/', {
        controller: "",
        templateUrl: ""
    })
})


// Controllers
app.controller('MainCtrl', function($scope){

})



app.controller('MainCtrl', function($scope){

})
