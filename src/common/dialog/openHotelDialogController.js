export default class OpenHotelDialogController {

  /*@ngInject*/
  constructor($scope, $log, $auth, $http,
              DeviceService, ListenrService, ToastrService, $state, moment) {
    this.deviceService = DeviceService;
    this.listenrService = ListenrService;
    this.toastrService = ToastrService;
    this.$scope = $scope;
    this.$auth = $auth;
    this.$http = $http;
    this.$log = $log;
    this.$state = $state;
    this.moment = moment;
    this.hotel = this.$scope.ngDialogData.hotel;
    this.bidding = this.$scope.ngDialogData.bid;
    console.log(this.bidding);
    $log.debug(this.$scope.ngDialogData.hotel);
    this.hotel.services = [
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
    ];
  }

  select() {
    console.log(this.$scope.ngDialogData.hotel);
    this.$scope.closeThisDialog();
    this.$state.go('success');
  }
}
