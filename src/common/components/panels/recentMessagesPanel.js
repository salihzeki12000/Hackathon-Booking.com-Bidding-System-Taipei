import angular from 'angular';
import 'common/core';

class RecentMessagesPanelCtrl {
  /*@ngInject*/
  constructor(dialogService) {
    this.dialogService = dialogService;
  }

  onModuleClick(moduleId) {
    this.dialogService.openModule({
      child: {
        id: this.pageDetail.childId,
        name: this.pageDetail.childName,
      },
      device: { id: this.pageDetail.deviceId },
      module: { id: moduleId },
    });
  }
}

const recentMessagesPanel = {
  bindings: {
    pageDetail: '<',
    messages: '<',
  },
  transclude: true,
  controller: RecentMessagesPanelCtrl,
  controllerAs: 'vm',
  template: `
    <div class="list-group module-content" ng-click="vm.onModuleClick('0000001')">
      <a class="list-group-item module-content-title">
        <span class="glyphicon glyphicon-comment" aria-hidden="true"></span>
        Recent Texts
      </a>
      <div class="list-group-item module-content-detail" ng-repeat="message in vm.messages">
        <h3>{{ message.handle }}</h3>
        <p>
          {{ message.text }}
        </p>
      </div>
      <a class="list-group-item module-content-btn">View All</a>
    </div>
  `,
};

export default angular
  .module('common.components.panels.recentMessagesPanel', [])
  .component('recentMessagesPanel', recentMessagesPanel);
