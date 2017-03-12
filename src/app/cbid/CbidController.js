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

    this.bidHotels = this.hotelsData;
  }

  select(item) {
    this.selectedHotel = item;
    this.dialogService.openHotel({ hotel: item });
  }
}
