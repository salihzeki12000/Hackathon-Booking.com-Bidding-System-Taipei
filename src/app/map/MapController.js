export default class MaoController {

  /*@ngInject*/
  constructor($state, $log, $cookieStore, ToastrService, moment) {
    let hotelCtrl = this;
    hotelCtrl.message = 'map controller';
    this.toastrService = ToastrService;
    this.$cookieStore = $cookieStore;
    this.$state = $state;
    this.$log = $log;
    this.moment = moment;
    $log.log(hotelCtrl.message);
  }

  goToCbid() {
    this.$state.go('cbid');
  }
}
