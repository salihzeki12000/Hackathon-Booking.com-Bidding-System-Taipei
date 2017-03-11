import angular from 'angular';

class MenuService {

  /*@ngInject*/
  constructor($q, $http, $cookieStore, ApiService) {
    this.$q = $q;
    this.$http = $http;
    this.apiService = ApiService;
  }

  getMenus() {
    return this.apiService.getMenus();
  }

  getChildrenAll() {
    return this.apiService.getChildrenAll();
  }
}

export default angular
  .module('MenuService', [])
  .service('MenuService', MenuService);
