import angular from 'angular';

class SubscriptionService {

  /*@ngInject*/
  constructor($q, $http, ApiService) {
    this.$q = $q;
    this.$http = $http;
    this.apiService = ApiService;
  }

  getSubscriptions() {
    return this.getSubscriptions();
  }

  getCurrentSubscription() {
    return this.apiService.getCurrentSubscription();
  }

  postSubscriptions(cardNumber, cvv, expirationYear, expirationMonth) {
    return this.apiService.postSubscriptions(cardNumber, cvv, expirationYear, expirationMonth);
  }

  deleteSubscriptions() {
    return this.apiService.deleteSubscriptions();
  }

  getPaymentProfile() {
    return this.apiService.getPaymentProfile();
  }
}

export default angular
  .module('SubscriptionService', [])
  .service('SubscriptionService', SubscriptionService);
