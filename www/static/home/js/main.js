// var app = angular.module('app', ['ngRoute']);
// app.config(['$routeProvider', function ($routeProvider) {
//     $routeProvider.when('/', {
//         template: 'home',
//         controller: 'mainCtrl'
//     }).when('/login', {
//         templateUrl: '/static/home/js/view/login.html',
//         controller: 'loginCtrl'
//     }).when('/auth', {
//         templateUrl: '/static/home/js/view/auth.html',
//         controller: 'authCtrl'
//     }).otherwise({redirectTo: '/'});
//
// }]);


// var app = angular.module('app', ['ui.Router']);
// app.config(function ($stateProvider, $urlRouteProvider) {
//     $urlRouteProvider.otherwise('/');
//
//     $stateProvider
//         .state('', {
//             url: '/',
//             templateUrl: 'home.html'
//         })
//         .state('login', {
//             url: '/login',
//             templateUrl: '/static/home/js/view/login.html'
//         }).state('auth', {
//         url: '/auth',
//         templateUrl: '/static/home/js/view/auth.html'
//     })
// });


var app = angular.module('app', ['ui.router']);

app.config(['$logProvider', '$stateProvider', function ($logProvider, $stateProvider) {
    $logProvider.debugEnabled(true);

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: '/app/templates/home.html',
            controller: 'HomeController', //也可以写成HomeController as home
            controllerAs: 'home'
        })
        .state('login', {
            url: '/login?gw_id&gw_address&gw_port&ip&mac&url',
            controller: 'loginCtrl',
            templateUrl: '/static/home/js/view/login.html'
        })
        .state('auth', {
            url: '/auth',
            controller: 'authCtrl',
            templateUrl: '/static/home/js/view/auth.html'
        })
        .state('ping', {
            url: '/ping',
            controller: 'pingCtrl',
            templateUrl: '/static/home/js/view/ping.html'
        })
        .state('portal', {
            url: '/portal',
            controller: 'portalCtrl',
            templateUrl: '/static/home/js/view/portal.html'
        })
        .state('sigin', {
            url: '/sigin',
            controller: 'siginCtrl',
            templateUrl: '/static/home/js/view/sigin.html'
        })
        .state('register', {
            url: '/register',
            controller: 'registerCtrl',
            templateUrl: '/static/home/js/view/register.html'
        })
}]);


app.controller('mainCtrl', function ($scope) {
    $scope.test = 'stbui';
});


app.controller('loginCtrl', function ($scope, $state, $stateParams) {
    var data = [{
        icon: '/static/home/images/01.png',
        name: '微信认证',
        url:''
    }, {
        icon: '/static/home/images/02.png',
        name: '一键上网'
    }, {
        icon: '/static/home/images/03.png',
        name: '手机认证'
    }, {
        icon: '/static/home/images/04.png',
        name: '注册认证',
        url:'register'
    }, {
        icon: '/static/home/images/05.png',
        name: '用户登录',
        url:'sigin'
    }, {
        icon: '/static/home/images/06.png',
        name: '客户留言'
    }
    ];

    $scope.lists = data;

    $scope.goToUrl = function (id) {
        console.log($state, $stateParams)
        // $state.go('register');
    }

});

app.controller('authCtrl', function ($scope) {
    $scope.test = 'auth page'
});

app.controller('registerCtrl', function ($scope) {

    $scope.reg = function () {
        var username = $scope.user;
        console.log(username);
    }

});

app.controller('siginCtrl', function ($scope) {


});