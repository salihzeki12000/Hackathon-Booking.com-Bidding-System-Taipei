import angular from 'angular';
import 'common/core';

class TopChildsPanelCtrl {
  /*@ngInject*/
  constructor(dialogService) {
    this.dialogService = dialogService;
  }

}

const topChildsPanel = {
  bindings: {
    addChild: '&',
    setChild: '&',
    childs: '<',
    currentChild: '<',
  },
  transclude: true,
  controller: TopChildsPanelCtrl,
  controllerAs: 'vm',
  template: `
  <div class="child-content">
    <div class="list-group list-group-horizontal">
      <a ng-click="vm.setChild({childId:child.id})"
        class="list-group-item child-content-detail"
        ng-class="{ 'child-focus': vm.currentChild.id === child.id }"
        ng-repeat="child in vm.childs">
        <div>
          <img ng-if="child.avatar_url.includes('http')"
            class="img-circle child-content-avatar"
            ng-src="{{child.avatar_url}}">
          <img ng-if="!child.avatar_url.includes('http')"
            src="assets/images/empty_profile.jpg"
            class="img-circle child-content-avatar">
        </div>
        <span class="child-content__span text-ellipsis">{{ child.name }}</span>
      </a>
      <a ng-click="vm.addChild()" class="list-group-item child-content-detail">
        <div>
          <img src="assets/images/addChild.png" class="img-circle child-content-avatar">
        </div>
        <span class="child-content__span text-ellipsis">Add Child</span>
      </a>
    </div>
  </div>
  `,
};

export default angular
  .module('common.components.panels.topChildsPanel', [])
  .component('topChildsPanel', topChildsPanel);
