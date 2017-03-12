import angular from 'angular';

import { modalModule } from 'common/core';
import adminLayoutNoSidebarTemplate from 'common/layouts/admin/admin-layout-no-sidebar.tpl';
import adminHeaderTemplate from 'common/layouts/admin/header.tpl';
import adminJSTemplate from 'common/layouts/admin/admin-assets-css-development.tpl';
import adminCSSTemplate from 'common/layouts/admin/admin-assets-js-development.tpl';

import SuccessController from './SuccessController';
import LayoutController from '../../common/layouts/LayoutController';
import successTemplate from './success.tpl';

/* @ngInject */
function ConfigureModule($stateProvider) {
  $stateProvider.state('success', {
    url: '/success',
    views: {
      '': {
        templateUrl: adminLayoutNoSidebarTemplate.name,
      },
      '@success': {
        controller: SuccessController,
        controllerAs: 'successCtrl',
        templateUrl: successTemplate.name,
      },
      'header@success': {
        controller: LayoutController,
        controllerAs: 'layoutCtrl',
        templateUrl: adminHeaderTemplate.name,
      },
      'assets-css@success': {
        templateUrl: adminCSSTemplate.name,
      },
      'assets-js@success': {
        templateUrl: adminJSTemplate.name,
      },
    },
  });
}

export default angular
  .module('success', [
    modalModule.name,
    successTemplate.name,
    adminLayoutNoSidebarTemplate.name,
    adminHeaderTemplate.name,
    adminJSTemplate.name,
    adminCSSTemplate.name,
  ])
  .config(ConfigureModule);
