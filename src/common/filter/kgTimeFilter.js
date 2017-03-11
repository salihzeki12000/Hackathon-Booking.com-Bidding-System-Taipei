import angular from 'angular';

/*@ngInject*/
const kgTimeFilter = function(moment) {
  const pstZone = '-0800';
  return (input = '', format) => {
    let map = {
      'short-time-1': { format: 'h:mm a', actionKey: 'formatInput' },
      'short-1': { format: 'MM/DD/YYYY', actionKey: 'formatInput' },
      'short-2': { format: 'MM/DD/YY', actionKey: 'formatInput' },
      'short-3': { format: 'MMMM DD, YYYY', actionKey: 'formatInput' },
      'short-4': { format: 'MMM. Do YYYY', actionKey: 'formatInput' },
      'short-day': { format: 'dddd', actionKey: 'formatInput' },
      'long-1': { format: 'dddd, MMM. Do YYYY, h:mm a', actionKey: 'formatInput' },
      'long-2': { format: 'MM/DD/YY, h:mm a', actionKey: 'formatInput' },
      'long-3': { format: 'MMMM DD YYYY,  h:mm a', actionKey: 'formatInput' },
      'long-4': { format: 'MM/DD/YYYY,  hh:mm', actionKey: 'formatInput' },
      'long-5': { format: 'MMM. Do, YYYY, hh:mm a', actionKey: 'formatInput' },
      'time-1': { format: 'hh a', actionKey: 'formatInput' },
      'referenceTime': { actionKey: 'calendar' },
      'durationSec': { actionKey: 'humanize' },
    };

    let actions = {
      formatInput: function(input, format) {
        return moment(input).utcOffset(pstZone).format(format);
      },
      calendar: function (input) {
        return moment(input).utcOffset(pstZone).calendar();
      },
      humanize: function(input) {
        return moment.duration(input, 'seconds').humanize();
      },
      identity: function(input) {
        return input;
      },
    };

    function run(input, filterKey) {
      if (!isValidFilterKey(filterKey)) {
        return actions.identity(input);
      }

      const { action, format } = getActionItem(filterKey);

      return action(input, format);
    }

    function getActionItem(filterKey) {
      let found = map[filterKey];

      return {
        action: getAction(found),
        format: found.format,
      };
    }

    function getAction(found) {
      let actionKey = found.actionKey;
      let action = actions[actionKey];

      return action;
    }

    function isValidFilterKey(key) {
      return Object.keys(map).indexOf(key) > -1;
    }

    return run(input, format);
  };
};

export default angular
  .module('kgTimeFilter', [])
  .filter('kgTimeFilter', kgTimeFilter);
