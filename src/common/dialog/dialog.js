import angular from 'angular';
import moduleDialog from 'common/dialog/modules/moduleDialog';
import addChildDialogTemplate from 'common/dialog/addChildDialog.tpl';
import editChildDialogTemplate from 'common/dialog/editChildDialog.tpl';
import deleteChildDialogTemplate from 'common/dialog/deleteChildDialog.tpl';
import addDeviceDialogTemplate from 'common/dialog/addDeviceDialog.tpl';
import deleteDeviceDialogTemplate from 'common/dialog/deleteDeviceDialog.tpl';
import freeTrialDialogTemplate from 'common/dialog/freeTrialDialog.tpl';
import syncDeviceDialogTemplate from 'common/dialog/syncDeviceDialog.tpl';
import ftuAddChildDialogTemplate from 'common/dialog/ftuAddChildDialog.tpl';
import ftuAddDeviceDialogTemplate from 'common/dialog/ftuAddDeviceDialog.tpl';
import notificationDialogTemplate from 'common/dialog/notificationDialog.tpl';
import reportWizzardDialogTemplate from 'common/dialog/reportWizzardDialog.tpl';
import iCloudSyncDescribeModule from 'common/components/descriptions/iCloudSyncDescription';
import iCloudHelpDescribeModule from 'common/components/descriptions/iCloudHelpDescription';

export default angular
  .module('common.dialog', [
    addChildDialogTemplate.name,
    editChildDialogTemplate.name,
    deleteChildDialogTemplate.name,
    addDeviceDialogTemplate.name,
    deleteDeviceDialogTemplate.name,
    freeTrialDialogTemplate.name,
    syncDeviceDialogTemplate.name,
    ftuAddChildDialogTemplate.name,
    ftuAddDeviceDialogTemplate.name,
    notificationDialogTemplate.name,
    reportWizzardDialogTemplate.name,
    iCloudSyncDescribeModule.name,
    iCloudHelpDescribeModule.name,
    moduleDialog.name,
  ]);
