import angular from 'angular';
import appConfig from '../config/appConfig.json!';
import apiDaoModule from './dao/apiDao';
import apiMockDaoModule from './dao/apiMockDao';

class ApiService {

  /*@ngInject*/
  constructor($http, $cookieStore, apiDao, apiMockDao) {
    this.$http = $http;
    this.$cookieStore = $cookieStore;
    this.dao = appConfig.apiService.mock ? apiMockDao : apiDao;
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
  .module('common.services.ApiService', [apiDaoModule.name, apiMockDaoModule.name])
  .service('ApiService', ApiService);
