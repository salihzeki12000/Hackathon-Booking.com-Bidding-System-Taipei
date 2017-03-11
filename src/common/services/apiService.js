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
  login(data) {
    return this.dao.login(data);
  }

  register(data) {
    return this.dao.register(data);
  }

  getCurrentUser() {
    return this.dao.getCurrentUser();
  }

  getMenus(data) {
    return this.dao.getMenus(data);
  }

  //Child API
  addChild(data) {
    return this.dao.addChild(data);
  }

  deleteChild(id) {
    return this.dao.deleteChild(id);
  }

  getChild(id) {
    return this.dao.getChild(id);
  }

  updateChild(id, data) {
    return this.dao.updateChild(id, data);
  }

  //Device API
  getDevicesAll(childId) {
    return this.dao.getDevicesAll(childId);
  }

  deleteDevice(childId, deviceId) {
    return this.dao.deleteDevice(childId, deviceId);
  }

  getDevice(childId, deviceId) {
    return this.dao.getDevice(childId, deviceId);
  }

  addDevice(childId, appleId, password, type, twoFaCode) {
    return this.dao.addDevice(childId, appleId, password, type, twoFaCode);
  }

  syncDeviceStatus(childId, deviceId, token) {
    return this.dao.syncDeviceStatus(childId, deviceId, token);
  }

  //Menu API
  getChildrenAll() {
    return this.dao.getChildrenAll();
  }

  //Module API
  getModules(childId, deviceId) {
    return this.dao.getModules(childId, deviceId);
  }

  getModule(childId, deviceId, moduleId, options) {
    return this.dao.getModule(childId, deviceId, moduleId, options);
  }

  getModuleRecent(childId, deviceId, moduleId, options) {
    return this.dao.getModuleRecent(childId, deviceId, moduleId, options);
  }

  getRecentChatActivities(options) {
    return this.dao.getRecentChatActivities(options);
  }

  getRecentPhotos(options) {
    return this.dao.getRecentPhotos(options);
  }

  getOutlierLocations(options) {
    return this.dao.getOutlierLocations(options);
  }

  getMostCommonLocations(options) {
    return this.dao.getMostCommonLocations(options);
  }

  //Subscription API
  getSubscriptions() {
    return this.dao.getSubscriptions();
  }

  getCurrentSubscription() {
    return this.dao.getCurrentSubscription();
  }

  postSubscriptions(cardNumber, cvv, expirationYear, expirationMonth) {
    return this.dao.postSubscriptions(cardNumber, cvv, expirationYear, expirationMonth);
  }

  deleteSubscriptions() {
    return this.dao.deleteSubscriptions();
  }

  getPaymentProfile() {
    return this.dao.getPaymentProfile();
  }
}

export default angular
  .module('common.services.ApiService', [apiDaoModule.name, apiMockDaoModule.name])
  .service('ApiService', ApiService);
