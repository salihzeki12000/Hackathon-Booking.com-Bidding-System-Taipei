import angular from 'angular';

class GtmService {

  /*@ngInject*/
  constructor($log, lodash) {
    this.$log = $log;
    this.lodash = lodash;
    this.events = [
      'livedemo-view',
      'livedemo-cta',
    ];
  }

  fire(event, type) {
    if (!this.lodash.includes(this.events, event)) {
      var msg = event + ' is not supported for GTM!';

      this.$log.warn(msg);
      throw Error(msg);
    }

    var obj = {};
    type = type || 'event';
    obj[type] = event;

    this.$log.debug('fire ' + event + ' GTM event.');

    dataLayer && dataLayer.push(obj); // eslint-disable-line no-undef
  }
}

export default angular
  .module('GtmService', [])
  .service('gtmService', GtmService);
