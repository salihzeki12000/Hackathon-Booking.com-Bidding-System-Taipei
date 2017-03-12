import mappingData from '../../common/mockData/mapping.json!';

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
    this.mappingData = mappingData;
  }

  select() {
    console.log(this.$scope.ngDialogData.hotel);
    this.$scope.closeThisDialog();
    this.$state.go('success');
  }
}
