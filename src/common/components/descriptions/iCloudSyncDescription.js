import angular from 'angular';
import 'common/core';

class ICloudSyncDescribeCtrl {
}

const iCloudSyncDescribe = {
  bindings: {
    title: '<',
    content: '<',
  },
  transclude: true,
  controller: ICloudSyncDescribeCtrl,
  controllerAs: 'vm',
  template: `
    <div class="ftu-dialog__footer ftu-dialog__footer__error">
      <div class="ftu-dialog__footer__error__head" ng-bind-html="vm.title">
      </div>
      <div ng-bind-html="vm.content">
      </div>
    </div>
  `,
};

export default angular
  .module('common.components.descriptions.iCloudSyncDescribe', [])
  .component('iCloudSyncDescribe', iCloudSyncDescribe);
