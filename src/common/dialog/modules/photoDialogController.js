import ChatModuleDialogController from './chatModuleDialogController';

export default class PhotoModuleDialogController extends ChatModuleDialogController {

  /*@ngInject*/
  constructor($scope, $log, ModuleService, lodash, moment) {

    super($scope, $log, ModuleService, lodash);

    this.$scope = $scope;
    this.moment = moment;
    $log.debug(this.$scope.ngDialogData);
  }

  switchModule() {
    this.getModule();
  }

  handleGetModule(queryString, responseData) {
    this.module = { photos: responseData };
    this.setPhotoItem(this.module.photos[0]);
  }

  processModuleData(data) {
    this.moduleData = this.combineOldAndNewData(this.moduleData, data);
  }

  setPhotoItem(photoItem) {
    this.module.photoItem = photoItem;
  }
}
