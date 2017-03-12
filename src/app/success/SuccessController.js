export default class SuccessController {

  /*@ngInject*/
  constructor($state, $log, $cookieStore, ToastrService, moment) {
    let successCtrl = this;
    successCtrl.message = 'success controller';
    this.toastrService = ToastrService;
    this.$cookieStore = $cookieStore;
    this.$state = $state;
    this.$log = $log;
  }

}
