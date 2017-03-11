import ChatModuleDialogController from './chatModuleDialogController';

export default class CallHistoryModuleDialogController extends ChatModuleDialogController {

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
    this.module = {
      call_history: this._.groupBy(this.moduleData, item => item.address),
    };
    this.setCallGroupItem(this.module.call_history[Object.keys(this.module.call_history)[0]]);
  }

  processModuleData(data) {
    this.moduleData = this.combineOldAndNewData(this.moduleData, data);
  }

  setCallGroupItem(groupItem) {
    this.module.callGroupItem = groupItem;
  }
}
