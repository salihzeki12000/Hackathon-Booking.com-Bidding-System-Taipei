export default class HbidController {

  /*@ngInject*/
  constructor($state, $log, $cookieStore, ToastrService, moment) {
    let hbidCtrl = this;
    hbidCtrl.message = 'cbid controller';
    this.toastrService = ToastrService;
    this.$cookieStore = $cookieStore;
    this.$state = $state;
    this.$log = $log;
    this.moment = moment;

    $log.log(hbidCtrl.message);
  }
}
