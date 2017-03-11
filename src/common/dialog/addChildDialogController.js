export default class AddChildDialogController {

  /*@ngInject*/
  constructor($scope, $log, ChildService, ListenrService, ToastrService, moment) {
    this.childService = ChildService;
    this.listenrService = ListenrService;
    this.toastrService = ToastrService;
    this.$scope = $scope;
    this.moment = moment;
    this.errMessage = '';

    // Add Child
    this.$scope.nowDate = moment();
    this.$scope.minDate = moment().add(-18, 'y');
  }

  addChildConfirm() {
    this.errMessage = '';
    if (this.childName) {
      this.childService.addChild(this.childName).then((value) => {
        if (!value.error) {
          this.$scope.closeThisDialog();
          this.listenrService.updateMenu();
          this.listenrService.updateChilds();
        }
      }, (error) => {
        this.errMessage = `Child's name is already in use or child's birthday is incorrect.`;
      });
    } else {
      this.toastrService.warning('Please enter child name :)');
    }
  }
}
