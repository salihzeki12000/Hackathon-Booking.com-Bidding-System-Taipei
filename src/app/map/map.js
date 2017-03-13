import angular from 'angular';

import adminLayoutNoSidebarTemplate from 'common/layouts/admin/admin-layout-no-sidebar.tpl';
import adminHeaderTemplate from 'common/layouts/admin/header.tpl';
import adminJSTemplate from 'common/layouts/admin/admin-assets-css-development.tpl';
import adminCSSTemplate from 'common/layouts/admin/admin-assets-js-development.tpl';

import MapController from './MapController';
import LayoutController from '../../common/layouts/LayoutController';
import mapTemplate from './map.tpl';

/* @ngInject */
function ConfigureModule($stateProvider) {
  $stateProvider.state('map', {
    url: '/map',
    views: {
      '': {
        templateUrl: adminLayoutNoSidebarTemplate.name,
      },
      '@map': {
        controller: MapController,
        controllerAs: 'mapCtrl',
        templateUrl: mapTemplate.name,
      },
      'header@map': {
        controller: LayoutController,
        controllerAs: 'layoutCtrl',
        templateUrl: adminHeaderTemplate.name,
      },
      'assets-css@map': {
        templateUrl: adminCSSTemplate.name,
      },
      'assets-js@map': {
        templateUrl: adminJSTemplate.name,
      },
    },
  });
}

export default angular
  .module('map', [
    mapTemplate.name,
    adminLayoutNoSidebarTemplate.name,
    adminHeaderTemplate.name,
    adminJSTemplate.name,
    adminCSSTemplate.name,
  ])
  .config(ConfigureModule);
