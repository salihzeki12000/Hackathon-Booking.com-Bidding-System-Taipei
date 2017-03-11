import angular from 'angular';
import locationDialogTemplate from 'common/dialog/modules/locationDialog.tpl';
import snapChatDialogTemplate from 'common/dialog/modules/snapChatDialog.tpl';
import facebookDialogTemplate from 'common/dialog/modules/facebookDialog.tpl';
import whatsAppDialogTemplate from 'common/dialog/modules/whatsAppDialog.tpl';
import smsDialogTemplate from 'common/dialog/modules/smsDialog.tpl';
import contactsDialogTemplate from 'common/dialog/modules/contactsDialog.tpl';
import callHistoryDialogTemplate from 'common/dialog/modules/callHistoryDialog.tpl';
import browserHistoryDialogTemplate from 'common/dialog/modules/browserHistoryDialog.tpl';
import photoDialogTemplate from 'common/dialog/modules/photoDialog.tpl';

export default angular
  .module('common.dialog.modules', [
    locationDialogTemplate.name,
    snapChatDialogTemplate.name,
    facebookDialogTemplate.name,
    whatsAppDialogTemplate.name,
    smsDialogTemplate.name,
    contactsDialogTemplate.name,
    callHistoryDialogTemplate.name,
    browserHistoryDialogTemplate.name,
    photoDialogTemplate.name,
  ]);
