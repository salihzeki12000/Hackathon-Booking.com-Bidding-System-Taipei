import angular from 'angular';
import 'common/core';

class DeviceHandlePanelCtrl {
  /*@ngInject*/
  constructor($cookieStore, dialogService, gtmService) {
    this.$cookieStore = $cookieStore;
    this.dialogService = dialogService;
    this.gtmService = gtmService;
  }

  deleteDevice() {
    if (this.isDemoUser()) {
      this.openFreeTrial();
      return;
    }

    this.dialogService.deleteDevice({ child: this.currentChild, device: this.currentDevice });
  }

  isDemoUser() {
    const user = this.$cookieStore.get('current_user');
    return user.type === 'DemoUser';
  }

  openFreeTrial() {
    this.gtmService.fire('livedemo-cta');

    this.freeTrialDialogState = true;

    this.dialogService.openFreeTrial();
  }
}

const deviceHandlePanel = {
  bindings: {
    needDisplay: '<',
    devices: '<',
    currentChild: '=',
    currentDevice: '=',
    displayNotifySyn: '<',
    addDevice: '&',
    setDevice: '&',
    selectedDeviceChanged: '&',
    syncDeviceStatus: '&',
  },
  transclude: true,
  controller: DeviceHandlePanelCtrl,
  templateUrl: 'src/common/components/panels/deviceHandlePanel.tpl.html',
  controllerAs: 'vm',
};

export default angular
  .module('common.components.panels.deviceHandlePanel', [])
  .component('deviceHandlePanel', deviceHandlePanel);
