// TODO extract dialogController
export default class LayoutController {

  /*@ngInject*/
  constructor($scope, $cookieStore, $window, $rootScope, $log, $state,
            AuthService, MenuService, ToastrService, gtmService, intercomService, ngDialog, dialogService) {
    let layoutCtrl = this;
    layoutCtrl.menuData = {};
    layoutCtrl.closeSidbarStatus = false;
    this.$cookieStore = $cookieStore;
    this.authService = AuthService;
    this.menuService = MenuService;
    this.toastrService = ToastrService;
    this.gtmService = gtmService;
    this.intercomService = intercomService;
    this.ngDialog = ngDialog;
    this.$state = $state;
    this.dialogService = dialogService;
    this.notification = null;

    layoutCtrl.isLogin = false;
    layoutCtrl.getMenus = getMenus;
    layoutCtrl.getCurrentUser = getCurrentUser;
    layoutCtrl.getMenus();
    layoutCtrl.getCurrentUser();

    /* INITIAL Navbar control */
    layoutCtrl.navTitle = $state.current.name;
    $scope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams) {
      switch (toState.name) {
        case 'dashboards':
          layoutCtrl.navTitle = 'dashboards';
          break;
        case 'profile':
          layoutCtrl.navTitle = 'profile';
          break;
        default:
          layoutCtrl.navTitle = 'default';
          break;
      }
    });
    /* END of Navbar control */

    // Init query_string
    this.query_string = this.$cookieStore.get('query_string');

    /* ROOT SCOPE CONTROL STORE STATE */
    $scope.$on('UPDATE_MENU', () => {
      layoutCtrl.getMenus();
    });
    /* END OF ROOT SCOPE CONTROL */

    function getMenus() {
      if (this.$cookieStore.get('auth_token')) {
        layoutCtrl.isLogin = true;
        this.menuService.getMenus().then(
          (response) => {
            if (!response.error) {
              layoutCtrl.menuData = response.data;
              $scope.selectedChild = this.$cookieStore.get('navigation_selected_child');
              $scope.selectedDevice = $scope.selectedChild &&
                                      $scope.selectedChild.devices &&
                                      $scope.selectedChild.devices[0];
            } else {
              this.toastrService.error(JSON.stringify(response.error));
            }
          }, (response) => {
            this.toastrService.error(JSON.stringify(response.data.error));
          }
        );
      }
    }

    function getCurrentUser() {
      layoutCtrl.currentUser = this.$cookieStore.get('current_user');
    }
  }

  goToLogin() {
    this.$state.go('login');
  }

  goToLogout() {
    if (this.authService.logout()) {
      this.intercomService.set();
      this.$state.go('login');
    }
  }

  goToProfile() {
    this.$state.go('profile');
  }

  onFreeTrialClick() {
    this.gtmService.fire('livedemo-cta');
  }

  onReportWizzardClick() {
    let notify = {
      title: `Situation 360`,
      content: `Continue in case of serious emergency <strong>only</strong>. <br>
                A report will automatically be generated.`,
      btnOpen: `Continue`,
      btnClose: `Close`,
    };
    this.notification = notify;
  }
}
