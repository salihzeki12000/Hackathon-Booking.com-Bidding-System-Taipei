import angular from 'angular';

import { modalModule } from 'common/core';
import adminLayoutNoSidebarTemplate from 'common/layouts/admin/admin-layout-no-sidebar.tpl';
import adminHeaderTemplate from 'common/layouts/admin/header.tpl';
import adminJSTemplate from 'common/layouts/admin/admin-assets-css-development.tpl';
import adminCSSTemplate from 'common/layouts/admin/admin-assets-js-development.tpl';

import HomeController from './HomeController';
import LayoutController from '../../common/layouts/LayoutController';
import homeTemplate from './home.tpl';

/* @ngInject */
function ConfigureModule($stateProvider) {
  $stateProvider.sstate('home', {
    url: '/home',
    views: {
      '': {
        templateUrl: adminLayoutNoSidebarTemplate.name,
      },
      '@home': {
        controller: HomeController,
        controllerAs: 'homeCtrl',
        templateUrl: homeTemplate.name,
      },
      'header@home': {
        controller: LayoutController,
        controllerAs: 'layoutCtrl',
        templateUrl: adminHeaderTemplate.name,
      },
      'assets-css@home': {
        templateUrl: adminCSSTemplate.name,
      },
      'assets-js@home': {
        templateUrl: adminJSTemplate.name,
      },
    },
  });
}

export default angular
  .module('home', [
    modalModule.name,
    authModule.name,
    homeTemplate.name,
    adminLayoutNoSidebarTemplate.name,
    adminHeaderTemplate.name,
    adminJSTemplate.name,
    adminCSSTemplate.name,
  ])
  .config(ConfigureModule);
