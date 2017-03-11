import angular from 'angular';
import 'angular-mocks';
import 'angular-cookies';
import 'angular-ui-router';
import 'angular-moment';
import 'ng-lodash';

import ChatMoudleDialogController from './chatModuleDialogController';
import ModuleServiceModule from '../../../common/services/module';
import ApiServiceModule from '../../../common/services/apiService';

describe('ChatMoudleDialogController', () => {
    beforeEach(() => {
      angular.mock.module('ngLodash');
      angular.mock.module('ngCookies');
      angular.mock.module(ModuleServiceModule.name);
      angular.mock.module(ApiServiceModule.name);
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
            return $controller(ChatMoudleDialogController, {
              $scope,
              $auth,
            });
          };
      }));

    it('should have combineOldAndNewData return combined array', () => {
        let controller = createController();
        let oldData = [0, 1];
        let responseData = [2, 3];
        let reverse = false;

        let result = controller.combineOldAndNewData(oldData, responseData, reverse);
        expect(result).be.eql([0, 1, 2, 3]);
      });

    it('should have combineOldAndNewData return reversed combined array', () => {
        let controller = createController();
        let oldData = [0, 1];
        let responseData = [2, 3];
        let reverse = true;

        let result = controller.combineOldAndNewData(oldData, responseData, reverse);
        expect(result).be.eql([2, 3, 0, 1]);
      });
  });
