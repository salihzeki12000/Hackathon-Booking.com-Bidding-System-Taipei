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

    this.fakeData = {
      anonymous: true,
      budget: 2000,
      length_staty: 5,
      location: 'taipei',
      requirements: [100, 20],
      date: 1489593600000,
    };

    this.services = {
      meeting_room: false,
      casino: false,
      free_parking: false,
      pickup: false,
      laundry: false,
      fitness: false,
      garden: false,
      swimming_pool: false,
      hot_spring_bath: false,
      restaurant: false,
    };

    this.servicesSelected = [];
    this.init();
  }

  init() {
    const { location, length_staty, budget, date } = this.fakeData;
    this.date = new Date(date);
    this.location = location;
    this.days = length_staty;
    this.budget = budget;
  }

  acceptBid() {
    let data = {
      requirements: this.servicesSelected,
    };
    this.$log.log('HotelController data' + data);
    this.$state.go('hbid');
  }
}
