import mappingData from '../../common/mockData/mapping.json!';
import hotelsData from '../../common/mockData/hotels.json!';

export default class CbidController {

  /*@ngInject*/
  constructor($state, $log, $cookieStore, ToastrService, moment, dialogService, $timeout, $http, ApiService) {
    let cbidCtrl = this;
    cbidCtrl.message = 'cbid controller';
    this.toastrService = ToastrService;
    this.$cookieStore = $cookieStore;
    this.dialogService = dialogService;
    this.$state = $state;
    this.$log = $log;
    this.$timeout = $timeout;
    this.$http = $http;
    this.moment = moment;
    this.hotels = [1, 2, 3, 4, 5, 6];
    this.selectedHotel = null;
    this.mappingData = mappingData;
    this.hotelsData = hotelsData;
    $log.log(cbidCtrl.message);

    this.bidHotels = [
      {
        name: 'W Hotel',
        price: '1000',
        image: 'http://t-ec.bstatic.com/images/hotel/square200/643/64331125.jpg',
        date: 1491353600000,
        recommended: true,
        avaliable_facilities: [7, 8, 9],
        unavaliable_facilities: [2, 3, 5],
      },
    ];
    // Example of asyn api.
    ApiService.getOffers().then((response) => {
      this.bidHotels = response.data;
    });
  }

  select(item) {
    this.selectedHotel = item;
    this.dialogService.openHotel({ hotel: item });
  }
}
