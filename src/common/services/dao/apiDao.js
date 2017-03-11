import angular from 'angular';

class ApiDao {

  /*@ngInject*/
  constructor($http) {
    this.$http = $http;
  }

  login(data) {
    return this.$http.post('/api/users/login', data);
  }

  register(data) {
    return this.$http.post('/api/users', data);
  }

  getCurrentUser() {
    return this.$http.get('/api/users/current');
  }

  getMenus() {
    return this.$http.get('/api/menus');
  }

  addChild(data) {
    return this.$http.post('/api/children', data);
  }

  deleteChild(childId, deviceId) {
    return this.$http.delete(`/api/children/${childId}/device/${deviceId}`);
  }

  getChild(id) {
    return this.$http.get(`/api/children/${id}`);
  }

  updateChild(id, data) {
    return this.$http.patch(`/api/children/${id}`, data);
  }

  getDevicesAll(childId) {
    return this.$http.get(`/api/children/${childId}/devices`);
  }

  deleteDevice(childId, deviceId) {
    return this.$http.delete(`/api/children/${childId}/devices/${deviceId}`);
  }

  getDevice(childId, deviceId) {
    return this.$http.get(`/api/children/${childId}/devices/${deviceId}`);
  }

  addDevice(childId, appleId, password, type, twoFaCode) {
    let data = { email: appleId, password, type, two_fa_code: twoFaCode };
    return this.$http.post(`/api/children/${childId}/devices`, data);
  }

  syncDeviceStatus(childId, deviceId, token) {
    return this.$http.post(`/api/children/${childId}/devices/${deviceId}/sync`, { token });
  }

  getChildrenAll() {
    return this.$http.get('/api/children');
  }

  getModules(childId, deviceId) {
    return this.$http.get(`/api/modules`);
  }

  getModule(childId, deviceId, moduleId, options) {
    if (options) {
      return this.$http.get(`/api/children/${childId}/devices/${deviceId}/modules/${moduleId}?${options}`);
    } else {
      return this.$http.get(`/api/children/${childId}/devices/${deviceId}/modules/${moduleId}`);
    }
  }

  getModuleRecent(childId, deviceId, moduleId, options) {
    if (options) {
      return this.$http.get(`/api/children/${childId}
                            /devices/${deviceId}
                            /modules/${moduleId}
                            /recently_contacts?${options}`);
    } else {
      return this.$http.get(`/api/children/${childId}/devices/${deviceId}/modules/${moduleId}/recently_contacts`);
    }
  }

  getRecentChatActivities(options) {
    return this.$http.get(`/api/dashboard/recently_chat_activities?${options}`);
  }

  getRecentPhotos(options) {
    return this.$http.get(`/api/dashboard/recently_photos?${options}`);
  }

  getOutlierLocations(options) {
    return this.$http.get(`/api/dashboard/outlier_locations?${options}`);
  }

  getMostCommonLocations(options) {
    return this.$http.get(`/api/dashboard/most_common_locations?${options}`);
  }

  getSubscriptions() {
    return this.$http.get('/api/subscriptions');
  }

  getCurrentSubscription() {
    return this.$http.get('/api/subscriptions/current');
  }

  postSubscriptions(cardNumber, cvv, expirationYear, expirationMonth) {
    let data = {
      card_number: cardNumber,
      cvv,
      expiration_year: expirationYear,
      expiration_month: expirationMonth,
    };
    return this.$http.post('/api/subscriptions', data);
  }

  deleteSubscriptions() {
    return this.$http.delete('/api/subscriptions');
  }

  getPaymentProfile() {
    return this.$http.get('/api/payment_profile');
  }
}

export default angular
  .module('common.services.dao.ApiDao', [])
  .service('apiDao', ApiDao);
