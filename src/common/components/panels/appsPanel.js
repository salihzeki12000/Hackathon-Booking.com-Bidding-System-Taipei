import angular from 'angular';
import 'common/core';

class AppPanelCtrl {
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

const appsPanel = {
  bindings: {
    modules: '<',
    pageDetail: '<',
  },
  transclude: true,
  controller: AppPanelCtrl,
  controllerAs: 'vm',
  template: `
    <div class="app-list-title col-xs-12">
      <div class="pull-left">
        <span class="glyphicon glyphicon-th" aria-hidden="true"></span>
        Apps
      </div>
    </div>
    <div class="list-group list-group-horizontal">
      <a class="list-group-item app-list-detail" ng-repeat="app in vm.modules" ng-click="vm.onModuleClick(app.id)">
        <div>
          <img ng-src="assets/images/{{app.id}}.png" class="app-list-avatar">
        </div>
        <span><label>{{ app.name }}</label></span>
      </a>
    </div>
  `,
};

export default angular
  .module('common.components.panels.appsPanel', [])
  .component('appsPanel', appsPanel);
