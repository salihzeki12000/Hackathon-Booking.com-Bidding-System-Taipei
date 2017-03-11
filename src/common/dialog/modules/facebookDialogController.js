import ChatModuleDialogController from './chatModuleDialogController';

export default class FacebookModuleDialogController extends ChatModuleDialogController {

  /*@ngInject*/
  constructor($scope, $log, ModuleService, lodash) {

    super($scope, $log, ModuleService, lodash);

    this.$scope = $scope;
    $log.debug(this.$scope.ngDialogData);
  }

  switchModule() {
    this.module = { facebook_messages: true };
    this.getModuleRecent();
  }
}
