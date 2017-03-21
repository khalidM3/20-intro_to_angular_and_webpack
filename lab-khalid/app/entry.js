'use strict';

require('./scss/reset.scss');
require('./scss/main.scss');

const
  angular = require('angular'),
  cowsay = require('cowsay-browser'),

  cowsayApp = angular.module('cowsayApp', []);

cowsayApp.controller('CowsayController', ['$log', '$scope', CowsayController]);

function CowsayController($log, $scope) {
  $log.debug('CowsayController');

  let cowsayCtrl = $scope.cowsayCtrl = {};

  cowsayCtrl.title = 'Welcome to Farmville';

  cowsayCtrl.speak = function(input){
    $log.debug('cowsayCtrl.speak()');
    return cowsay.say({text: input || 'Mooooooo'});
  };

  cowsayCtrl.logger = function(input){
    $log.debug('cowsayCtrl.logger()');
    $log.log(input);
  };
}