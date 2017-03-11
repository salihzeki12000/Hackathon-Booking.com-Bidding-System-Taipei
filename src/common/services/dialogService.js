import angular from 'angular';
import DialogController from 'common/dialog/dialogController';
import AddDeviceDialogController from 'common/dialog/addDeviceDialogController';
import AddChildDialogController from 'common/dialog/addChildDialogController';
import DeleteDeviceDialogController from 'common/dialog/deleteDeviceDialogController';
import FreeTrialDialogController from 'common/dialog/freeTrialDialogController';
import ReportWizzardDialogController from 'common/dialog/reportWizzardDialogController';
import MessageModuleDialogController from 'common/dialog/modules/messageDialogController';
import WhatsappModuleDialogController from 'common/dialog/modules/whatsappDialogController';
import FacebookModuleDialogController from 'common/dialog/modules/facebookDialogController';
import SnapchatModuleDialogController from 'common/dialog/modules/snapchatDialogController';
import BrowserHistoryModuleDialogController from 'common/dialog/modules/browserHistoryDialogController';
import ContactsModuleDialogController from 'common/dialog/modules/contactsDialogController';
import CallHistoryModuleDialogController from 'common/dialog/modules/callHistoryDialogController';
import PhotoModuleDialogController from 'common/dialog/modules/photoDialogController';
import LocationModuleDialogController from 'common/dialog/modules/locationDialogController';

class DialogService {

  /*@ngInject*/
  constructor($log, $cookieStore, $location, ngDialog, lodash) {
    this.$log = $log;
    this.$cookieStore = $cookieStore;
    this.ngDialog = ngDialog;
    this.$location = $location;
    this._ = lodash;
    this.openDialogMap = {
      addChild: {},
      deleteChild: { child: 'child' },
      addDevice: { child: 'child', options: 'options' },
      deleteDevice: { child: 'child', device: 'device' },
      openModule: { child: 'child', device: 'device', module: 'module' },
      openFreeTrial: {},
      openReportWizzard: {},
    };
  }

  openDialog(routeDialog, options) {
    if (routeDialog) {
      const finalOptions = this.openDialogOptionsHelper(routeDialog, options);
      this[routeDialog](finalOptions);
    }
  }

  openDialogOptionsHelper(routeDialog, options) {
    let returnOptions = {};
    const finalOptions = this._.map(this.openDialogMap[routeDialog], val => ({ [val]: options[val] }));
    this._.forEach(finalOptions, (data) => {
      this._.forEach(Object.keys(data), (item) => returnOptions[item] = data[item]);
    });
    return returnOptions;
  }

  addChild() {
    this.$location.search('dialog', 'addChild');
    let addChild = this.ngDialog.open({
      template: 'common/dialog/addChildDialog.tpl.html',
      controllerAs: 'dialogCtrl',
      controller: AddChildDialogController,
      className: 'ngdialog-theme-default custom-full-screen custom-pc-width',
      showClose: false,
      data: JSON.stringify({ method: 'addChild' }),
    });
    addChild.closePromise.then(() => {
      this.$location.search('dialog', null);
    });
  }

  deleteChild({ child }) {
    this.$location.search('dialog', 'deleteChild');
    let deleteChild = this.ngDialog.open({
      template: 'common/dialog/deleteChildDialog.tpl.html',
      controllerAs: 'dialogCtrl',
      controller: DialogController,
      data: JSON.stringify({ method: 'deleteChild', childId: child.id }),
    });
    deleteChild.closePromise.then(() => {
      this.$location.search('dialog', null);
    });
  }

  addDevice({ child, options }) {
    this.$location.search('dialog', 'addDevice');
    let email = '';
    let type = '';
    if (options) {
      email = options.email || '';
      type = options.type || '';
    }

    let addDevice = this.ngDialog.open({
      template: 'common/dialog/addDeviceDialog.tpl.html',
      controllerAs: 'dialogCtrl',
      controller: AddDeviceDialogController,
      className: 'ngdialog-theme-default custom-full-screen custom-pc-width',
      showClose: false,
      data: JSON.stringify({
        method: 'addDevice',
        stateChildId: child.id,
        firstTimeAddDevice: !email,
        stateMobileAccountEmail: email,
        stateMobileType: type,
      }),
    });
    addDevice.closePromise.then(() => {
      this.$location.search('dialog', null);
    });
  }

  deleteDevice({ child, device }) {
    this.$location.search('dialog', 'deleteDevice');
    let deleteDevice = this.ngDialog.open({
      template: 'common/dialog/deleteDeviceDialog.tpl.html',
      controllerAs: 'dialogCtrl',
      controller: DeleteDeviceDialogController,
      showClose: true,
      data: JSON.stringify({ method: 'deleteDevice',
                            stateChildId: child.id,
                            deviceId: device.id,
                            deviceName: device.device_name,
                          }),
    });
    deleteDevice.closePromise.then(() => {
      this.$location.search('dialog', null);
    });
  }

  openModule({ child, device, module }) {
    const childId = child.id;
    const childName = child.name;
    const deviceId = device.id;
    const moduleId = module.id;

    this.$location.search('dialog', 'openModule');
    this.$location.search('module', moduleId);
    let openModule = this.ngDialog.open({
      template: this._getModuleInfo(moduleId).template,
      className: 'ngdialog-theme-default custom-full-screen custom-overlay custom-pc-width',
      height: '100%',
      showClose: false,
      closeByDocument: true,
      closeByNavigation: true,
      controllerAs: 'dialogCtrl',
      controller: this._getModuleInfo(moduleId).controller,
      data: JSON.stringify({ method: 'openModule',
                            childId,
                            deviceId,
                            moduleId,
                            childName }),
    });

    openModule.closePromise.then(() => {
      this.$location.search('dialog', null);
      this.$location.search('module', null);
    });

    this.$log.log('open moudle with moduleId ', moduleId);
  }

  openReportWizzard() {
    this.$location.search('dialog', 'openReportWizzard');
    let openReportWizzard = this.ngDialog.open({
      template: 'common/dialog/reportWizzardDialog.tpl.html',
      className: 'ngdialog-theme-default custom-full-screen custom-pc-width',
      height: '100%',
      overlay: true,
      showClose: false,
      closeByNavigation: true,
      controllerAs: 'dialogCtrl',
      controller: ReportWizzardDialogController,
      data: JSON.stringify({ method: 'reportWizzard', query_string: this.$cookieStore.get('query_string') }),
    });
    openReportWizzard.closePromise.then(() => {
      this.$location.search('dialog', null);
    });
  }

  openFreeTrial() {
    this.$location.search('dialog', 'openFreeTrial');
    let openFreeTrial = this.ngDialog.open({
      template: 'common/dialog/freeTrialDialog.tpl.html',
      className: 'ngdialog-theme-default custom-full-screen custom-pc-width',
      height: '100%',
      overlay: true,
      showClose: false,
      closeByNavigation: true,
      controllerAs: 'dialogCtrl',
      controller: FreeTrialDialogController,
      data: JSON.stringify({ method: 'freeTrial', query_string: this.$cookieStore.get('query_string') }),
    });
    openFreeTrial.closePromise.then(() => {
      this.$location.search('dialog', null);
    });
  }

  _getModuleInfo(moduleId) {
    var mapping = {
      '0000001': { controller: MessageModuleDialogController, template: 'common/dialog/modules/smsDialog.tpl.html' },
      '0000002': { controller: PhotoModuleDialogController, template: 'common/dialog/modules/photoDialog.tpl.html' },
      '0000004': { controller: BrowserHistoryModuleDialogController, template: 'common/dialog/modules/browserHistoryDialog.tpl.html' },
      '0000008': { controller: CallHistoryModuleDialogController, template: 'common/dialog/modules/callHistoryDialog.tpl.html' },
      '0000016': { controller: ContactsModuleDialogController, template: 'common/dialog/modules/contactsDialog.tpl.html' },
      '0000256': { controller: LocationModuleDialogController, template: 'common/dialog/modules/locationDialog.tpl.html' },
      '0000512': { controller: WhatsappModuleDialogController, template: 'common/dialog/modules/whatsAppDialog.tpl.html' },
      '0032768': { controller: FacebookModuleDialogController, template: 'common/dialog/modules/facebookDialog.tpl.html' },
      '0131072': { controller: SnapchatModuleDialogController, template: 'common/dialog/modules/snapChatDialog.tpl.html' },
    };

    var info = mapping[moduleId];

    if (!info) {
      throw new Error(`No corresponding mapping for module id: ${moduleId}`);
    }

    return info;
  }
}

export default angular
  .module('DialogService', [])
  .service('dialogService', DialogService);
