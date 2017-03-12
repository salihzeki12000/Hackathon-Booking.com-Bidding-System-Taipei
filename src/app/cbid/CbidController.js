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

    this.bidHotels = [
      {
        name: 'W Hotel',
        price: '1000',
        image: 'http://t-ec.bstatic.com/images/hotel/square200/643/64331125.jpg',
        date: 1491353600000,
        avaliable_facilities: [7, 8, 9],
        unavaliable_facilities: [2, 3, 5],
      },
      {
        name: 'Garden Taipie',
        price: '950',
        image: 'http://t-ec.bstatic.com/images/hotel/square200/190/19056004.jpg',
        date: 1491653600000,
        avaliable_facilities: [7, 8, 9],
        unavaliable_facilities: [2, 3, 5],
      },
      {
        name: 'Love Hotel',
        price: '1100',
        image: 'http://t-ec.bstatic.com/images/hotel/square200/897/89774648.jpg',
        date: 1491953600000,
        avaliable_facilities: [7, 8, 9, 12],
        unavaliable_facilities: [2, 3, 5],
      },
    ];
  }

  select(item) {
    this.selectedHotel = item;
    this.dialogService.openHotel({ hotel: item });
  }
}
