export default class HomeController {

  /*@ngInject*/
  constructor($state, $log, $cookieStore, AuthService, SubscriptionService, ToastrService, moment) {
    let homeCtrl = this;
    homeCtrl.message = 'this is a home';
    this.subscriptionService = SubscriptionService;
    this.authService = AuthService;
    this.toastrService = ToastrService;
    this.$cookieStore = $cookieStore;
    this.$state = $state;
    this.$log = $log;
    this.moment = moment;

    this.date = null;
    this.location = '';
    this.days = 1;
    this.budget = null;
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
  }

  search() {
    console.log(`data${this.days}, and data array${this.servicesSelected}`);
    this.$state.go('cbid');
  }

  selectService(serviceKey) {
    let findService = (item) => item === serviceKey;
    let serviceIndex = this.servicesSelected.findIndex(findService);
    serviceIndex >= 0 ?
      this.servicesSelected.splice(serviceIndex, 1)
      :
      this.servicesSelected.push(serviceKey);
  }
}
