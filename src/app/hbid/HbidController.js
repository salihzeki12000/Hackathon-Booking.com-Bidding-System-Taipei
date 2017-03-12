export default class HbidController {

  /*@ngInject*/
  constructor($state, $log, $cookieStore, ToastrService, moment, dialogService) {
    let hbidCtrl = this;
    hbidCtrl.message = 'cbid controller';
    this.toastrService = ToastrService;
    this.$cookieStore = $cookieStore;
    this.$state = $state;
    this.$log = $log;
    this.moment = moment;
    this.dialogService = dialogService;

    this.myHotel = {
      name: 'W Hotel',
      price: '1000',
      date: 1491753600000,
      image: 'http://t-ec.bstatic.com/images/hotel/square200/643/64331125.jpg',
      avaliable_facilities: ['meeting_room', 'casino'],
      unavaliable_facilities: ['garden', 'pool'],
    };

    this.bidHotels = [
      {
        name: 'Anonymous1',
        price: '1000',
        image: 'assets/images/secret-hotel.png',
        date: 1491353600000,
        avaliable_facilities: ['meeting_room', 'casino'],
        unavaliable_facilities: ['garden', 'pool'],
      },
      {
        name: 'Anonymous2',
        price: '950',
        image: 'assets/images/secret-hotel.png',
        date: 1491653600000,
        avaliable_facilities: ['meeting_room', 'casino'],
        unavaliable_facilities: ['garden', 'pool'],
      },
      {
        name: 'Anonymous3',
        price: '1100',
        image: 'assets/images/secret-hotel.png',
        date: 1491953600000,
        avaliable_facilities: ['meeting_room', 'casino'],
        unavaliable_facilities: ['garden', 'pool'],
      },
    ];
    this.servicesSelected = [];
    $log.log(hbidCtrl.message);
  }

  selectMyHotel(myHotel) {
    this.dialogService.openHotel({ hotel: myHotel, bid: true });
  }

  selectSecretHotel(secretHotel) {
    this.dialogService.openHotel({ hotel: secretHotel, bid: true });
  }
}
