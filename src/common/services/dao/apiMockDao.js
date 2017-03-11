import angular from 'angular';
import children from 'common/mockData/children.json!';
import devices from 'common/mockData/devices.json!';
import deviceModules from 'common/mockData/deviceModules.json!';
import snapChatMessages from 'common/mockData/modules/snapChatMessages.json!';
import whatsappMessages from 'common/mockData/modules/whatsappMessages.json!';
import sms from 'common/mockData/modules/sms.json!';
import contacts from 'common/mockData/modules/contacts.json!';
import callHistory from 'common/mockData/modules/callHistory.json!';
import browserHistory from 'common/mockData/modules/browserHistory.json!';
import photos from 'common/mockData/modules/photos.json!';
import facebookMessages from 'common/mockData/modules/facebookMessages.json!';
import locationData from 'common/mockData/modules/location.json!';

class ApiMockDao {

  /*@ngInject*/
  constructor($q, $http) {
    this.$q = $q;
    this.$http = $http;
  }

  login(data) {
    return this.$http.post('/api/users/login', data);
  }

  register(data) {
    return this.$http.post('/api/users', data);
  }

  getMenus() {
    return this.$http.get('/api/menus');
  }

  addChild(data) {
    return this.$http.post('/api/children', data);
  }

  deleteChild(id) {
    return this.$http.delete(`/api/children/${id}`);
  }

  getChild(id) {
    return this.$http.get(`/api/children/${id}`);
  }

  updateChild(id, data) {
    return this.$http.patch(`/api/children/${id}`, data);
  }

  getDevicesAll(childId) {
    let deferred = this.$q.defer();
    deferred.resolve(devices);

    return deferred.promise;
  }

  deleteDevice(childId, deviceId) {
    let deferred = this.$q.defer();
    deferred.resolve({});
    return deferred.promise;
  }

  getDevice(childId, deviceId) {
    let deferred = this.$q.defer();
    deferred.resolve({
      data: this.mockGetDevice(deviceId)
    });
    return deferred.promise;
  }

  addDevice(childId, appleId, password) {
    let deferred = this.$q.defer();
    deferred.resolve({ data: { name: 'test device' } });
    return deferred.promise;
  }

  syncDeviceStatus(childId, deviceId) {
    return this.$http.post(`/api//children/${childId}/devices/${deviceId}/sync`, null);
  }

  getChildrenAll() {
    let deferred = this.$q.defer();
    deferred.resolve(children);

    return deferred.promise;
  }

  getModules(childId, deviceId) {
    let deferred = this.$q.defer();
    deferred.resolve(deviceModules);
    return deferred.promise;
  }

  getModule(childId, deviceId, moduleId) {
    let deferred = this.$q.defer();
    deferred.resolve(this.mockDeviceModule(moduleId));
    return deferred.promise;
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

  mockGetDevice(deviceId) {
    let device;
    devices.data.devices.forEach(function (element) {
      if (element.id === deviceId) {
        device = element;
      }
    }, this);

    return device;
  }

  mockDeviceModule(id) {
    const mapper = {
      '0000001': sms,
      '0000002': photos,
      '0000004': browserHistory,
      '0000008': callHistory,
      '0000016': contacts,
      '0000256': locationData,
      '0000512': whatsappMessages,
      '0032768': facebookMessages,
      '0131072': snapChatMessages,
    };

    return mapper[id];
  }
}

export default angular
  .module('common.services.dao.ApiMockDao', [])
  .service('apiMockDao', ApiMockDao);
