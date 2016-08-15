'use strict';

/**
 * @ngdoc service
 * @name contactListApp.contactService
 * @description This service takes care of loading contacts from api endpoint
 * # contactService
 * Service in the contactListApp.
 */
angular.module('contactListApp')
  .service('contactService', ['$http', function($http) {
    function _getContacts(){
      return $http.get('https://candidate-test.herokuapp.com/contacts').then(function(response){
        return response.data;
      });
    }

    return {
      getContacts :_getContacts
    }
  }]);
