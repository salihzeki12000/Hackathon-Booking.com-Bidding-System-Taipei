import angular from 'angular';

class IntercomService {
  set(user) {
    if (user) {
      window.Intercom('boot', {
        app_id: 'mp0wcnmx',
        name: user.first_name,
        email: user.email,
        created_at: user.created_at,
      });
    } else {
      window.Intercom('boot', {
        app_id: 'mp0wcnmx',
      });
    }

    window.Intercom('update');
  }
}

export default angular
  .module('IntercomService', [])
  .service('intercomService', IntercomService);
