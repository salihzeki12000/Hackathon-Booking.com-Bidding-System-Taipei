import ChatModuleDialogController from './chatModuleDialogController';

export default class ContactsModuleDialogController extends ChatModuleDialogController {

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
    this.module = { contacts: this.moduleData };

    if (this.module.contacts.length) {
      this.setContact(this.module.contacts[0]);
    }
  }

  processModuleData(data) {
    this.moduleData = this.combineOldAndNewData(this.moduleData, data);
  }

  setBrowserGroupItem(groupItem) {
    this.module.browserGroupItem = groupItem;
  }

  setContact(item) {
    this.module.contact = item;
  }
}
