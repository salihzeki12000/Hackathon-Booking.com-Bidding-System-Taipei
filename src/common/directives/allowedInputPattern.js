import angular from 'angular';
export default angular
  .module('allowedInputPattern', [])
  .directive('allowedInputPattern', () =>
    ({
      require: 'ngModel',
      link: function (scope, elem, attrs, ngModel) {
        ngModel.$parsers.push(function (inputValue) {
          var transformedInput = inputValue.toLowerCase().replace(/[^0-9]/g, '');
          if (transformedInput !== inputValue) {
            ngModel.$setViewValue(transformedInput);
            ngModel.$render();
          }

          return transformedInput;
        });
      }
    })
  );
