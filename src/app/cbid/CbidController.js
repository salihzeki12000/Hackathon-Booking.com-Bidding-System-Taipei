export default class CbidController {

  /*@ngInject*/
  constructor($state, $log, $cookieStore, ToastrService, moment) {
    let cbidCtrl = this;
    cbidCtrl.message = 'cbid controller';
    this.toastrService = ToastrService;
    this.$cookieStore = $cookieStore;
    this.$state = $state;
    this.$log = $log;
    this.moment = moment;

    $log.log(cbidCtrl.message);
  }
}
