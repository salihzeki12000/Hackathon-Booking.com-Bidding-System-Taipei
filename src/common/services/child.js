import angular from 'angular';

class ChildService {

  /*@ngInject*/
  constructor($q, $http, ApiService) {
    this.$q = $q;
    this.$http = $http;
    this.apiService = ApiService;
  }

  addChild(name) {
    let data = { name };
    return this.apiService.addChild(data);
  }

  deleteChild(id) {
    return this.apiService.deleteChild(id);
  }

  getChild(id) {
    return this.apiService.getChild(id);
  }

  updateChild(id, name) {
    let data = { name };
    return this.apiService.updateChild(id, data);
  }
}

export default angular
  .module('ChildService', [])
  .service('ChildService', ChildService);
