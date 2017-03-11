export default class DialogController {

  /*@ngInject*/
  constructor($scope, $log, ChildService, ListenrService, ToastrService) {
    this.childService = ChildService;
    this.listenrService = ListenrService;
    this.toastrService = ToastrService;
    this.$scope = $scope;
    $log.debug(this.$scope.ngDialogData);
    this.dialogData = this.$scope.ngDialogData;
    this.$scope.errMessage = '';

    // Edit Child Dialog.
    this.$scope.childName = this.$scope.ngDialogData.childName;

    this.$log = $log;

    this.childName = this.dialogData.childName;

    // NotificationDialog
    this.notifyContent = this.dialogData.notifyContent;
  }
}
