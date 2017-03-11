import angular from 'angular';
import 'common/core';

class ReportWizzardCtrl {
  /*@ngInject*/
  constructor(dialogService) {
    this.dialogService = dialogService;
  }

  openReportWizzard() {
    this.dialogService.openReportWizzard();
    this.notify = '';
  }

  clearNotification() {
    this.notify = null;
  }
}

const reportWizzardNotify = {
  bindings: {
    notify: '=',
  },
  transclude: true,
  controller: ReportWizzardCtrl,
  controllerAs: 'vm',
  template: `
    <div class="notification-report-wizzard">
      <div class="notification-report-wizzard__triangle"></div>
      <div class="notification-report-wizzard__title">
        {{ vm.notify.title }}
      </div>
      <div class="notification-report-wizzard__split"></div>
      <div class="notification-report-wizzard__content" ng-bind-html="vm.notify.content"></div>
      <br>
      <div class="notification-report-wizzard__btn">
        <a ng-click="vm.openReportWizzard()" class="notification-report-wizzard__btn__open">{{ vm.notify.btnOpen }}</a>
        <a ng-click="vm.clearNotification()" class="notification-report-wizzard__btn__close">{{ vm.notify.btnClose }}</a>
      </div>
    </div>
  `,
};

export default angular
  .module('common.components.notifications.reportWizzardNotify', [])
  .component('reportWizzardNotify', reportWizzardNotify);
