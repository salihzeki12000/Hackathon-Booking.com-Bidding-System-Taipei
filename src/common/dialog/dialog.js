import angular from 'angular';
import openHotelDialogTemplate from 'common/dialog/openHotelDialog.tpl';

export default angular
  .module('common.dialog', [
    openHotelDialogTemplate.name,
  ]);
