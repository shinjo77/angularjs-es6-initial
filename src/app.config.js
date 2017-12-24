export default function route($locationProvider, $routeProvider) {
  
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('');

//   $routeProvider.when('/login', {templateUrl: 'login/login.php',
        //   controller : "loginController", reloadOnSearch: true})

    $routeProvider.when('/home', {templateUrl: 'src/home/home.php', 
        controller : "homeController", reloadOnSearch: true})

    .otherwise({
        redirectTo: '/home'
    });
}

route.$inject = ['$locationProvider', '$routeProvider'];