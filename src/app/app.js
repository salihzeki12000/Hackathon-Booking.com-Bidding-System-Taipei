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
import anuglarLogglyLogger from 'common/utils/angular-loggly-logger';
import authModule from 'common/services/auth';
import menuModule from 'common/services/menu';
import childModule from 'common/services/child';
import deviceModule from 'common/services/device';
import gtmModule from 'common/services/gtmService';
import dialogModule from 'common/services/dialogService';
import listenerModule from 'common/services/listener';
import moduleService from 'common/services/module';
import intercomService from 'common/services/intercomService';
import subscriptionService from 'common/services/subscription';
import algoliaService from 'common/services/algoliaService';
import authInterceptor from 'common/utils/auth-interceptors';
import errorInterceptor from 'common/utils/error-interceptors';
import dialogService from 'common/dialog/dialog';

import kgTimeFilter from 'common/filter/kgTimeFilter';
import kgDistanceFilter from 'common/filter/kgDistanceFilter';

import toastr from 'toastr/build/toastr.min.css!'; // eslint-disable-line
import ngDialog from 'ng-dialog/css/ngDialog.css!'; // eslint-disable-line
import ngDialogThemeDefault from 'ng-dialog/css/ngDialog-theme-default.css!'; // eslint-disable-line
import ngDialogThemePlain from 'ng-dialog/css/ngDialog-theme-plain.css!'; // eslint-disable-line
import ngDatePickerPlain from 'g00fy-/angular-datepicker/dist/angular-datepicker.css!'; // eslint-disable-line

let app = angular.module('app', [
  'ui.router', 'oc.lazyLoad', 'ngCookies', 'ngDialog', 'ngMap', 'ncy-angular-breadcrumb', 'ngMessages',
  'ngSanitize', 'angularMoment', 'ngLodash', 'datePicker', 'satellizer',
  authModule.name, menuModule.name, childModule.name, deviceModule.name, listenerModule.name, moduleService.name,
  subscriptionService.name, apiServiceModule.name, authInterceptor.name, toastrServiceModule.name, dialogService.name,
  algoliaService.name,
  gtmModule.name, intercomService.name, anuglarLogglyLogger.name, dialogModule.name, errorInterceptor.name,
  kgTimeFilter.name, kgDistanceFilter.name,
]);

app.config(routing(app));
app.config(function($authProvider) {
    $authProvider.google({
      responseType: 'token',
      scope: [
        'profile',
        'email',
        'https://www.googleapis.com/auth/contacts',
        'https://www.googleapis.com/auth/plus.me',
        'https://www.google.com/m8/feeds',
        'https://www.googleapis.com/auth/drive.metadata.readonly',
        'https://www.googleapis.com/auth/drive.photos.readonly',
        'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/gmail.modify',
        'https://picasaweb.google.com/data/',
      ],
      clientId: '985015306974-74hsqfn0rh5uhlpovaiqaknbehd23jm9.apps.googleusercontent.com',
    });
  });

app.config(['$urlRouterProvider', '$locationProvider', '$compileProvider', '$logProvider', '$httpProvider',
  '$ocLazyLoadProvider',
  function ($urlRouterProvider, $locationProvider, $compileProvider, $logProvider, $httpProvider, $ocLazyLoadProvider) {
  $locationProvider.html5Mode({
    enabled: false,
    requireBase: false,
  });
  $httpProvider.useApplyAsync(true);
  $urlRouterProvider.otherwise('/children');

  if (window.prod) {
    // http://ng-perf.com/2014/10/24/simple-trick-to-speed-up-your-angularjs-app-load-time/
    $logProvider.debugEnabled(false);
    $compileProvider.debugInfoEnabled(false);
  }

  $ocLazyLoadProvider.config({
    debug: true,
  });
}]);

app.config(function ($httpProvider) {
  $httpProvider.interceptors.push('authInterceptor', 'errorInterceptor');
});

app.config(['ngDialogProvider', function (ngDialogProvider) {
  ngDialogProvider.setDefaults({
    closeByDocument: false,
  });
}]);

app.config(['LogglyLoggerProvider', function(LogglyLoggerProvider) {
  LogglyLoggerProvider.inputToken('3b3f7740-32d7-4a2d-9232-eebd154acd7f').sendConsoleErrors(true);
}]);

app.run(['intercomService', function (intercomService) {
  intercomService.set();
}]);

angular.element(document).ready(function () {
  angular.bootstrap(document.body, [app.name], {
    strictDi: true,
  });
});

export default app;
