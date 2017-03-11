import angular from 'angular';
export default angular
  .module('common.directive.autoFillSync', [])
  .directive('AutoFillSync', ($timeout, ngModel, $log) => {
    $log.debug('autoFillSynce');
    return {
        require: 'ngModel',
        link: function (scope, elem, attrs, ngModel) {
            var origVal = elem.val();
            $timeout(function () {
                var newVal = elem.val();
                if (ngModel.$pristine && origVal !== newVal) {
                  ngModel.$setViewValue(newVal);
                }
              }, 500);
          }
      };
  });
