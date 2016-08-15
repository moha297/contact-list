'use strict';

/**
 * @ngdoc directive
 * @name contactListApp.directive:contacts
 * @description
 * # contacts
 */
angular.module('contactListApp')
  .directive('contacts', ['contactService', function (contactService) {
    return {
      templateUrl: '/views/directives/contacts.html',
      restrict: 'E',
      replace:true,
      link: function postLink(scope, element, attrs) {
        scope.loading = true;
        scope.contactList = [];
        contactService.getContacts().then(function(contactsData){
          scope.loading = false;
          scope.contactList = contactsData;
        },function(){
          scope.loading = false;
        });
      }
    };
  }]);
