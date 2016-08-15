'use strict';

/**
 * @ngdoc directive
 * @name contactListApp.directive:contactCard
 * @description
 * # contactCard
 */
angular.module('contactListApp')
  .directive('contactCard', function () {
    return {
      templateUrl: '/views/directives/contactcard.html',
      restrict: 'E',
      replace:true,
      scope:{
        contact: '='
      },
      link: function postLink(scope, element, attrs) {
        
      }
    };
  });
