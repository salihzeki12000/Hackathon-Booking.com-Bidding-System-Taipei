import angular from 'angular';

class ModuleService {

  /*@ngInject*/
  constructor($q, $http, ApiService) {
    this.$q = $q;
    this.$http = $http;
    this.apiService = ApiService;

    const modules = [
      { moduleNmae: 'MODULE_MESSAGES', moduleId: '0000001' },
      { moduleNmae: 'MODULE_PHOTOS', moduleId: '0000002' },
      { moduleNmae: 'MODULE_BROWSER_HISTORY', moduleId: '0000004' },
      { moduleNmae: 'MODULE_CALL_HISTORY', moduleId: '0000008' },
      { moduleNmae: 'MODULE_CONTACTS', moduleId: '0000016' },
      { moduleNmae: 'MODULE_LOCATION', moduleId: '0000256' },
      { moduleNmae: 'MODULE_WHATSAPP', moduleId: '0000512' },
      { moduleNmae: 'MODULE_SNAPCHAT', moduleId: '0131072' },
    ];
    modules.forEach(({ moduleNmae, moduleId }) => {
      this[moduleNmae] = moduleId;
    });
  }

  getModules(childId, deviceId) {
    return this.apiService.getModules(childId, deviceId);
  }

  getModule(childId, deviceId, moduleId, options) {
    return this.apiService.getModule(childId, deviceId, moduleId, options);
  }

  getModuleRecent(childId, deviceId, moduleId, options) {
    return this.apiService.getModuleRecent(childId, deviceId, moduleId, options);
  }

  getRecentChatActivities(options) {
    return this.apiService.getRecentChatActivities(options);
  }

  getRecentPhotos(options) {
    return this.apiService.getRecentPhotos(options);
  }

  getMostCommonLocations(options) {
    return this.apiService.getMostCommonLocations(options);
  }

  getOutlierLocations(options) {
    return this.apiService.getOutlierLocations(options);
  }
}

export default angular
  .module('ModuleService', [])
  .service('ModuleService', ModuleService);
