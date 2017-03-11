import angular from 'angular';

import { modalModule } from 'common/core';
import adminLayoutNoSidebarTemplate from 'common/layouts/admin/admin-layout-no-sidebar.tpl';
import adminHeaderTemplate from 'common/layouts/admin/header.tpl';
import adminJSTemplate from 'common/layouts/admin/admin-assets-css-development.tpl';
import adminCSSTemplate from 'common/layouts/admin/admin-assets-js-development.tpl';

import HbidController from './HbidController';
import LayoutController from '../../common/layouts/LayoutController';
import hbidTemplate from './hbid.tpl';

/* @ngInject */
function ConfigureModule($stateProvider) {
  $stateProvider.state('hbid', {
    url: '/hbid',
    views: {
      '': {
        templateUrl: adminLayoutNoSidebarTemplate.name,
      },
      '@hbid': {
        controller: HbidController,
        controllerAs: 'hbidCtrl',
        templateUrl: hbidTemplate.name,
      },
      'header@hbid': {
        controller: LayoutController,
        controllerAs: 'layoutCtrl',
        templateUrl: adminHeaderTemplate.name,
      },
      'assets-css@hbid': {
        templateUrl: adminCSSTemplate.name,
      },
      'assets-js@hbid': {
        templateUrl: adminJSTemplate.name,
      },
    },
  });
}

export default angular
  .module('hbid', [
    modalModule.name,
    hbidTemplate.name,
    adminLayoutNoSidebarTemplate.name,
    adminHeaderTemplate.name,
    adminJSTemplate.name,
    adminCSSTemplate.name,
  ])
  .config(ConfigureModule);
