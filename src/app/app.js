import 'babel/external-helpers';

import angular from 'angular';
import 'angular-ui-router';
import { apiServiceModule, toastrServiceModule } from 'common/core';
import 'ngmap';
import 'ocLazyLoad';
import 'angular-breadcrumb';
import 'angular-cookies';
import 'angular-messages';
import 'angular-moment';
import 'g00fy-/angular-datepicker';
import 'ng-dialog';
import 'moment';
import 'ng-lodash';
import 'jquery';
import 'twbs/bootstrap';
import 'toastr';
import 'satellizer';
import 'angular-sanitize';
import routing from 'common/utils/routing';
import dialogModule from 'common/services/dialogService';
import dialogService from 'common/dialog/dialog';
import toastr from 'toastr/build/toastr.min.css!'; // eslint-disable-line
import ngDialog from 'ng-dialog/css/ngDialog.css!'; // eslint-disable-line
import ngDialogThemeDefault from 'ng-dialog/css/ngDialog-theme-default.css!'; // eslint-disable-line
import ngDialogThemePlain from 'ng-dialog/css/ngDialog-theme-plain.css!'; // eslint-disable-line
import ngDatePickerPlain from 'g00fy-/angular-datepicker/dist/angular-datepicker.css!'; // eslint-disable-line

let app = angular.module('app', [
  'ui.router', 'oc.lazyLoad', 'ngCookies', 'ngDialog', 'ngMap', 'ncy-angular-breadcrumb', 'ngMessages',
  'ngSanitize', 'angularMoment', 'ngLodash', 'datePicker', 'satellizer',
   apiServiceModule.name, toastrServiceModule.name, dialogService.name, dialogModule.name,
]);

app.config(routing(app));

app.config(['$urlRouterProvider', '$locationProvider', '$compileProvider', '$logProvider', '$httpProvider',
  '$ocLazyLoadProvider',
  function ($urlRouterProvider, $locationProvider, $compileProvider, $logProvider, $httpProvider, $ocLazyLoadProvider) {
  $locationProvider.html5Mode({
    enabled: false,
    requireBase: false,
  });
  $httpProvider.useApplyAsync(true);
  $urlRouterProvider.otherwise('/home');

  if (window.prod) {
    // http://ng-perf.com/2014/10/24/simple-trick-to-speed-up-your-angularjs-app-load-time/
    $logProvider.debugEnabled(false);
    $compileProvider.debugInfoEnabled(false);
  }

  $ocLazyLoadProvider.config({
    debug: true,
  });
}]);

app.config(['ngDialogProvider', function (ngDialogProvider) {
  ngDialogProvider.setDefaults({
    closeByDocument: false,
  });
}]);

angular.element(document).ready(function () {
  angular.bootstrap(document.body, [app.name], {
    strictDi: true,
  });
});

export default app;
