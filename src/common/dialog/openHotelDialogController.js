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
    this.hotel = this.$scope.ngDialogData.hotel;
    $log.debug(this.$scope.ngDialogData.hotel);
    this.hotel = { services: [
      'meeting_room',
      'casino',
      'free_parking',
      'pickup',
      'laundry',
      'fitness',
      'garden',
      'swimming_pool',
      'hot_spring_bath',
      'restaurant',
    ] };
  }

  select() {
    console.log(this.$scope.ngDialogData.hotel);
    this.$state.go('home');
  }
}
