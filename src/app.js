// import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';

import angular from 'angular';
import ngRoute from 'angular-route';

import routing from './app.config';
// import homeController from './home/home.controller';
import {loginComponent} from './login/login.component';
import loginController from './login/login.controller';

// var something = new loginComponent();

// const controller = new loginController();

angular.module('app', [ngRoute])
    .component('appLogin', loginComponent)
    // .controller('loginController', loginController)
    // .controller('homeController', homeController)
    // .directive('loginRoute', loginRoute)
    .config(routing);