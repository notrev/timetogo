(function () {

    'use strict';

    /**
     * Module creation and configuration
     */
    angular
        .module('TimeToGo', ['ui.router', 'ngMaterial', 'notification', 'md.data.table'])
        .config(TimeToGoConfig);

    /**
     * Module configuration.
     */
    function TimeToGoConfig($stateProvider, $urlRouterProvider) {
        /*
         * Routes
         */
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'app/home/home.template.html',
                controller: 'HomeController',
                controllerAs: 'vm'
            })
            .state('timesheet', {
                url: '/timesheet',
                templateUrl: 'app/timesheet/timesheet.template.html',
                controller: 'TimesheetController',
                controllerAs: 'vm'
            })
            .state('timetogo', {
                url: '/timetogo',
                templateUrl: 'app/timetogo/timetogo.template.html',
                controller: 'TimeToGoController',
                controllerAs: 'vm'
            });

        $urlRouterProvider
            .otherwise('/home');
    }

    // Injecting dependencies
    TimeToGoConfig.$inject = [
        '$stateProvider',
        '$urlRouterProvider'
    ];

})();
