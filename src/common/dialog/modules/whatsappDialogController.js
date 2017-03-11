import ChatModuleDialogController from './chatModuleDialogController';

export default class WhatsappModuleDialogController extends ChatModuleDialogController {

  /*@ngInject*/
  constructor($scope, $log, ModuleService, lodash) {

    super($scope, $log, ModuleService, lodash);

    this.$scope = $scope;
    $log.debug(this.$scope.ngDialogData);
  }

  switchModule() {
    this.module = { whatsapp_messages: true };
    this.getModuleRecent();
  }
}
