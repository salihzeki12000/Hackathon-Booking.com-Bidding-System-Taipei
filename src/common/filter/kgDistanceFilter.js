import angular from 'angular';

/*@ngInject*/
const kgDistanceFilter = function(moment) {
  return function (input) {
    if (input >= 1000) {
      return (input / 1000).toFixed(2) + 'km';
    } else {
      return input + 'm';
    }
  };
};

export default angular
  .module('kgDistanceFilter', [])
  .filter('kgDistanceFilter', kgDistanceFilter);
