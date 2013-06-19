'use strict';

// Declare app level module which depends on filters, and services
var myApp = angular.module('myApp', ['ajoslin.mobile-navigate','ngMobile'])
    .config(function ($compileProvider){
        $compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
    })
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {templateUrl: 'partials/homeView.html', controller: 'HomeCtrl'});
        // $routeProvider.when('/view1', {templateUrl: 'partials/notificationView.html'});
        // $routeProvider.when('/view2', {templateUrl: 'partials/geolocationView.html'});
        $routeProvider.otherwise({redirectTo: '/'});
  }]);
