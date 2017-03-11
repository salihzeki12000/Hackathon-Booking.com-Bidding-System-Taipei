export default class HotelController {

  /*@ngInject*/
  constructor($state, $log, $cookieStore, ToastrService, moment) {
    let hotelCtrl = this;
    hotelCtrl.message = 'cbid controller';
    this.toastrService = ToastrService;
    this.$cookieStore = $cookieStore;
    this.$state = $state;
    this.$log = $log;
    this.moment = moment;

    $log.log(hotelCtrl.message);
  }
}
