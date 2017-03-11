import angular from 'angular';
import OpenHotelDialogController from 'common/dialog/openHotelDialogController';
class DialogService {

  /*@ngInject*/
  constructor($log, $cookieStore, $location, ngDialog, lodash) {
    this.$log = $log;
    this.$cookieStore = $cookieStore;
    this.ngDialog = ngDialog;
    this.$location = $location;
    this._ = lodash;
  }

  openHotel(hotel) {
    this.ngDialog.open({
      template: 'common/dialog/openHotelDialog.tpl.html',
      controllerAs: 'dialogCtrl',
      controller: OpenHotelDialogController,
      className: 'ngdialog-theme-default custom-full-screen custom-pc-width',
      showClose: false,
      closeByNavigation: true,
      data: JSON.stringify({ method: 'viewHotel', hotel }),
    });
  }
}

export default angular
  .module('DialogService', [])
  .service('dialogService', DialogService);
