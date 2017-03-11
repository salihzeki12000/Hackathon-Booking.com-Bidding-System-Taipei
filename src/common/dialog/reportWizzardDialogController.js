export default class ReportWizzardDialogController {

  /*@ngInject*/
  constructor($scope, $state, $log) {
    this.$scope = $scope;
    this.$state = $state;
    this.$log = $log;
    this.dialogData = this.$scope.ngDialogData;
    this.query_string = this.dialogData.query_string;
  }

  openReport() {
    this.$scope.closeThisDialog();
    this.$state.go('report');
  }
}
