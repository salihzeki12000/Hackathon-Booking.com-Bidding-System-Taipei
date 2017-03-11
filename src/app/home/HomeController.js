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
  }
}
