import angular from 'angular';

class DeviceService {

  /*@ngInject*/
  constructor($rootScope, $q, $http, $log, ApiService, ListenrService) {
    this.$q = $q;
    this.$http = $http;
    this.$log = $log;
    this.apiService = ApiService;
    this.listenrService = ListenrService;
  }

  getDevicesAll(childId) {
    return this.apiService.getDevicesAll(childId);
  }

  deleteDevice(childId, deviceId) {
    return this.apiService.deleteDevice(childId, deviceId);
  }

  getDevice(childId, deviceId) {
    return this.apiService.getDevice(childId, deviceId);
  }

  addDevice(childId, appleId, password, type, twoFaCode) {
    return this.apiService.addDevice(childId, appleId, password, type, twoFaCode);
  }

  syncDeviceStatus(childId, deviceId, token) {
    this.$log.info(`sync device status by childId(${childId}), deviceId(${deviceId})`);
    this.listenrService.syncDevice();

    return this.apiService.syncDeviceStatus(childId, deviceId, token);
  }
}

export default angular
  .module('DeviceService', [])
  .service('DeviceService', DeviceService);
