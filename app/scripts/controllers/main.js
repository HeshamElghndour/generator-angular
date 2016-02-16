'use strict';

/**
 * @ngdoc function
 * @name generatorAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the generatorAngularApp
 */
angular.module('generatorAngularApp')
  .controller('MainCtrl', function ($scope,$mdMedia,$mdDialog ) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.showAdvanced = function(ev) {
      var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
      $mdDialog.show({
        templateUrl: 'views/contact-modal.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true,
        fullscreen: useFullScreen
      })
      .then(function(answer) {
        $scope.status = 'You said the information was "' + answer + '".';
      }, function() {
        $scope.status = 'You cancelled the dialog.';
      });
      $scope.$watch(function() {
        return $mdMedia('xs') || $mdMedia('sm');
      }, function(wantsFullScreen) {
        $scope.customFullscreen = (wantsFullScreen === true);
      });
    };


    $scope.select= function(item) {
      $scope.selected = item; 
    };
    $scope.isActive = function(item) {
      return $scope.selected === item;
    };

    $scope.data = {
      group1 : 'Dark'
    };

  })
