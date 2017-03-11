export default class FreeTrialDialogController {

  /*@ngInject*/
  constructor($scope) {
    this.$scope = $scope;
    this.dialogData = this.$scope.ngDialogData;
    this.query_string = this.dialogData.query_string;
  }
}
