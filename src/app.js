import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';

import angular from 'angular';
import ngRoute from 'angular-route';

import routing from './app.config';
import homeController from './home/home.controller';

angular.module('app', ['ngRoute'])
    .controller('homeController', homeController)
    .config(routing);