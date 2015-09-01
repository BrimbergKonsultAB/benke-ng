'use strict';

/**
 * @ngdoc overview
 * @name benkeNgApp
 * @description
 * # benkeNgApp
 *
 * Main module of the application.
 */
angular
    .module('benkeNgApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/cv-se', {
              templateUrl: 'views/cv-se.html',
              controller: 'CvSeCtrl',
              controllerAs: 'cvSe'
            })
            .when('/cv-en', {
              templateUrl: 'views/cv-en.html',
              controller: 'CvEnCtrl',
              controllerAs: 'cvEn'
            })
            .when('/kurser', {
              templateUrl: 'views/kurser.html',
              controller: 'KurserCtrl',
              controllerAs: 'kurser'
            })
            .when('/link', {
              templateUrl: 'views/link.html',
              controller: 'LinkCtrl',
              controllerAs: 'link'
            })
            .when('/kontakt', {
              templateUrl: 'views/kontakt.html',
              controller: 'KontaktCtrl',
              controllerAs: 'kontakt'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
