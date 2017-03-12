import mappingData from '../../common/mockData/mapping.json!';

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
    this.mappingData = mappingData;

    this.date = null;
    this.location = '';
    this.days = 1;
    this.budget = null;
    this.services = {
      2: false,
      3: false,
      4: false,
      5: false,
      6: false,
      7: false,
      8: false,
      9: false,
      15: false,
      23: false,
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
      when: tmpDate * 1000,
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
