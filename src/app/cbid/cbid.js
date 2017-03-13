import angular from 'angular';

import adminLayoutNoSidebarTemplate from 'common/layouts/admin/admin-layout-no-sidebar.tpl';
import adminHeaderTemplate from 'common/layouts/admin/header.tpl';
import adminJSTemplate from 'common/layouts/admin/admin-assets-css-development.tpl';
import adminCSSTemplate from 'common/layouts/admin/admin-assets-js-development.tpl';

import CbidController from './CbidController';
import LayoutController from '../../common/layouts/LayoutController';
import cbidTemplate from './cbid.tpl';

/* @ngInject */
function ConfigureModule($stateProvider) {
  $stateProvider.state('cbid', {
    url: '/cbid',
    views: {
      '': {
        templateUrl: adminLayoutNoSidebarTemplate.name,
      },
      '@cbid': {
        controller: CbidController,
        controllerAs: 'cbidCtrl',
        templateUrl: cbidTemplate.name,
      },
      'header@cbid': {
        controller: LayoutController,
        controllerAs: 'layoutCtrl',
        templateUrl: adminHeaderTemplate.name,
      },
      'assets-css@cbid': {
        templateUrl: adminCSSTemplate.name,
      },
      'assets-js@cbid': {
        templateUrl: adminJSTemplate.name,
      },
    },
  });
}

export default angular
  .module('cbid', [
    cbidTemplate.name,
    adminLayoutNoSidebarTemplate.name,
    adminHeaderTemplate.name,
    adminJSTemplate.name,
    adminCSSTemplate.name,
  ])
  .config(ConfigureModule);
