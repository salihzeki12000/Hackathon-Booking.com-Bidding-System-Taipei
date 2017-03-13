import angular from 'angular';

import adminLayoutNoSidebarTemplate from 'common/layouts/admin/admin-layout-no-sidebar.tpl';
import adminHeaderTemplate from 'common/layouts/admin/header.tpl';
import adminJSTemplate from 'common/layouts/admin/admin-assets-css-development.tpl';
import adminCSSTemplate from 'common/layouts/admin/admin-assets-js-development.tpl';

import HotelController from './HotelController';
import LayoutController from '../../common/layouts/LayoutController';
import hotelTemplate from './hotel.tpl';

/* @ngInject */
function ConfigureModule($stateProvider) {
  $stateProvider.state('hotel', {
    url: '/hotel',
    views: {
      '': {
        templateUrl: adminLayoutNoSidebarTemplate.name,
      },
      '@hotel': {
        controller: HotelController,
        controllerAs: 'hotelCtrl',
        templateUrl: hotelTemplate.name,
      },
      'header@hotel': {
        controller: LayoutController,
        controllerAs: 'layoutCtrl',
        templateUrl: adminHeaderTemplate.name,
      },
      'assets-css@hotel': {
        templateUrl: adminCSSTemplate.name,
      },
      'assets-js@hotel': {
        templateUrl: adminJSTemplate.name,
      },
    },
  });
}

export default angular
  .module('hotel', [
    hotelTemplate.name,
    adminLayoutNoSidebarTemplate.name,
    adminHeaderTemplate.name,
    adminJSTemplate.name,
    adminCSSTemplate.name,
  ])
  .config(ConfigureModule);
