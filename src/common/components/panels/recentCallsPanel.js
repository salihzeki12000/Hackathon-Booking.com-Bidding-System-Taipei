import angular from 'angular';
import 'common/core';

class RecentCallsPanelCtrl {
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

const recentCallsPanel = {
  bindings: {
    pageDetail: '<',
    calls: '<',
  },
  transclude: true,
  controller: RecentCallsPanelCtrl,
  controllerAs: 'vm',
  template: `
    <div class="list-group module-content" ng-click="vm.onModuleClick('0000008')">
      <div class="list-group-item module-content-title">
        <span class="glyphicon glyphicon-earphone" aria-hidden="true"></span>
        Recent Calls
      </div>
      <div class="list-group-item module-content-detail" ng-repeat="call in vm.calls">
        <h3>{{ call.address }}</h3>
        <p>
          {{ call.date | kgTimeFilter: 'short-1' }}
        </p>
      </div>
      <div class="list-group-item module-content-btn"><span>View All</span></div>
    </div>
  `,
};

export default angular
  .module('common.components.panels.recentCallsPanel', [])
  .component('recentCallsPanel', recentCallsPanel);
