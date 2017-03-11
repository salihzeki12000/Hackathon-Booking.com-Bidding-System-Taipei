export default class DeleteDeviceDialogController {

  /*@ngInject*/
  constructor($scope, $log, DeviceService, ListenrService, ToastrService) {
    this.deviceService = DeviceService;
    this.listenrService = ListenrService;
    this.toastrService = ToastrService;
    this.$scope = $scope;
    $log.debug(this.$scope.ngDialogData);
    this.dialogData = this.$scope.ngDialogData;

    // Delete Device Dialog
    this.devicename = this.dialogData.deviceName;

    this.$log = $log;
  }

  deleteDeviceConfirm() {
    this.deviceService.deleteDevice(this.dialogData.stateChildId, this.dialogData.deviceId).then(
      (value) => {
        if (!value.error) {
          this.$scope.closeThisDialog();
          this.listenrService.updateMenu();
          this.listenrService.updateDevices();
        } else {
          this.toastrService.error(`Delet device error, err msg ${value.error}`);
        }
      }, (error) => {
        this.toastrService.warning('Please complete the form :)');
      }
    );
  }
}
