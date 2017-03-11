import angular from 'angular';
import 'angular-mocks';
import 'angular-cookies';
import 'angular-ui-router';
import 'angular-moment';
import 'ng-lodash';

import DialogController from './dialogController';
import ChildServiceModule from '../../common/services/child';
import DeviceServiceModule from '../../common/services/device';
import ListenrServiceModule from '../../common/services/listener';
import ModuleServiceModule from '../../common/services/module';
import ApiServiceModule from '../../common/services/apiService';
import ToastrServiceModule from '../../common/services/toastrService';
import SubscriptionServiceModule from '../../common/services/subscription';

describe('LoginController', () => {
    beforeEach(() => {
      angular.mock.module('ngCookies');
      angular.mock.module('ui.router');
      angular.mock.module('angularMoment');
      angular.mock.module('ngLodash');
      angular.mock.module(ChildServiceModule.name);
      angular.mock.module(DeviceServiceModule.name);
      angular.mock.module(ListenrServiceModule.name);
      angular.mock.module(ModuleServiceModule.name);
      angular.mock.module(ApiServiceModule.name);
      angular.mock.module(ToastrServiceModule.name);
      angular.mock.module(SubscriptionServiceModule.name);
    });

    let $scope;
    let $auth;
    let createController;

    beforeEach(inject(function ($rootScope, $controller, $injector) {
        $scope = {
          ngDialogData: {
            childName: 'test',
            firstTimeAddDevice: 'true',
          },
        };
        $auth = {};
        createController = function() {
            return $controller(DialogController, {
              $scope,
              $auth,
            });
          };
      }));

    it('should contains properies', () => {
      expect(createController.childName).be.defined;
    });
  });
