import angular from 'angular';
import 'common/core';
import DialogController from 'common/dialog/dialogController';

class BarNotifyCtrl {
  /*@ngInject*/
  constructor(ngDialog) {
    this.ngDialog = ngDialog;
  }

  openNotificationDialog() {
    this.ngDialog.open({
      template: 'common/dialog/notificationDialog.tpl.html',
      controllerAs: 'dialogCtrl',
      controller: DialogController,
      className: 'ngdialog-theme-default custom-pc-width',
      showClose: false,
      data: JSON.stringify({ method: 'notification', notifyContent: this.notify.content }),
    });
  }

  clearBarNotification() {
    this.notify = null;
  }
}

const barNotify = {
  bindings: {
    notify: '=',
  },
  transclude: true,
  controller: BarNotifyCtrl,
  controllerAs: 'vm',
  template: `
    <div class="notification" ng-click="vm.openNotificationDialog()">
      {{ vm.notify.content }}
    </div>
  `,
};

export default angular
  .module('common.components.notifications.barNotify', [])
  .component('barNotify', barNotify);
