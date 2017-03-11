export default class CbidController {

  /*@ngInject*/
  constructor($state, $log, $cookieStore, ToastrService, moment, dialogService) {
    let cbidCtrl = this;
    cbidCtrl.message = 'cbid controller';
    this.toastrService = ToastrService;
    this.$cookieStore = $cookieStore;
    this.dialogService = dialogService;
    this.$state = $state;
    this.$log = $log;
    this.moment = moment;
    this.hotels = [1, 2, 3, 4, 5, 6];
    this.selectedHotel = null;
    $log.log(cbidCtrl.message);
  }

  select(item) {
    this.selectedHotel = item;
    this.dialogService.openHotel({ hotel: item });
  }
}
