export default class OpenHotelDialogController {

  /*@ngInject*/
  constructor($scope, $log, $auth, $http,
              DeviceService, ListenrService, ToastrService, $state) {
    this.deviceService = DeviceService;
    this.listenrService = ListenrService;
    this.toastrService = ToastrService;
    this.$scope = $scope;
    this.$auth = $auth;
    this.$http = $http;
    this.$log = $log;
    this.$state = $state;
    $log.debug(this.$scope.ngDialogData.hotel);
  }

  select() {
    console.log(this.$scope.ngDialogData.hotel);
    this.$state.go('home');
  }
}
