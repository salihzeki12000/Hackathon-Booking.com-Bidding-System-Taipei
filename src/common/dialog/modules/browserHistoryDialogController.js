import ChatModuleDialogController from './chatModuleDialogController';

export default class BrowserHistoryModuleDialogController extends ChatModuleDialogController {

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
      browser_history: this._.groupBy(this.moduleData, function (item) {
        if (this.moment(item.last_visit).startOf('day').format() === this.moment().startOf('day').format()) {
          return 'Earlier Today';
        } else {
          return this.moment(item.last_visit).startOf('day').format();
        }
      }.bind(this)),
    };
    this.setBrowserGroupItem(this.module.browser_history[Object.keys(this.module.browser_history)[0]]);
  }

  processModuleData(data) {
    this.moduleData = this.combineOldAndNewData(this.moduleData, data);
  }

  setBrowserGroupItem(groupItem) {
    this.module.browserGroupItem = groupItem;
  }
}
