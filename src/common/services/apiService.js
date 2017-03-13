import angular from 'angular';

class ApiService {

  /*@ngInject*/
  constructor($http, $cookieStore) {
    this.$http = $http;
    this.$cookieStore = $cookieStore;
  }

  //Auth API
  getOffers() {
    let url = '10.187.1.187';

    return this.$http({
      method: 'GET',
      url: `http://${url}:8080/company/deals/ibm`,
    });
  }
}

export default angular
  .module('common.services.ApiService', [])
  .service('ApiService', ApiService);
