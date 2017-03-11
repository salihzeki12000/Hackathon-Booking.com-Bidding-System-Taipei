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
    let tmpDate = this.moment(this.date).unix();
    let data = {
      bid_owner: 'ibm',
      anonymous: true,
      p_allowed_overbudget: 2,
      location: this.location,
      length_stay: this.days,
      when: tmpDate,
      requirements: this.servicesSelected,
    };
    this.$log.log('HomeController data' + data);
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
