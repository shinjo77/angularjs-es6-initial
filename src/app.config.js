export default function route($locationProvider, $routeProvider) {
  
    // $locationProvider.html5Mode(true);
    // $locationProvider.hashPrefix('');

    $routeProvider
    // .when('/login', {templateUrl: 'src/login/login.php', reloadOnSearch: true})
    .when('/login', {templateUrl: 'src/login/login.php', reloadOnSearch: true})

    // .when('/home', {templateUrl: 'src/home/home.php', 
    //     controller : "homeController", reloadOnSearch: true})

    .otherwise({
        redirectTo: '/login'
    });
}

route.$inject = ['$locationProvider', '$routeProvider'];