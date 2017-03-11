import angular from 'angular';
import 'common/core';

class RecentLocationsPanelCtrl {
  /*@ngInject*/
  constructor($scope, dialogService, ModuleService, ListenrService, moment) {
    this.dialogService = dialogService;
    this.moduleService = ModuleService;
    this.moment = moment;
    this.listenrService = ListenrService;

    $scope.$on('SYNC_LOCATION', () => {
      this.getLocation();
    });

    this.getLocation();
  }

  onModuleClick(moduleId) {
    this.dialogService.openModule({
      child: {
        id: this.pageDetail.childId,
        name: this.pageDetail.childName,
      },
      device: { id: this.pageDetail.deviceId },
      module: { id: moduleId },
    });
  }

  getLocation() {
    this.moduleService.getModule(this.pageDetail.childId, this.pageDetail.deviceId, '0000256').then((response) => {
      this.locations = this.setLocationDate(response.data.data);
    });
  }

  setLocationDate(data) {
    let locationArr = [];
    data.forEach((o) => {
      let data = o;
      data.formatDate = this.moment(data.date).format('MMMM Do YYYY, HH:mm');
      locationArr.push(data);
    });
    return locationArr;
  }
}

const recentLocationsPanel = {
  bindings: {
    pageDetail: '<',
  },
  transclude: true,
  controller: RecentLocationsPanelCtrl,
  controllerAs: 'vm',
  template: `
    <div class="list-group module-content">
      <div class="list-group-item module-content-title">
        <span class="glyphicon glyphicon-map-marker" aria-hidden="true"></span>
        Location
      </div>
      <div ng-if="vm.locations.length === 0">
        <h3>There are no location data on this device.</h3>
      </div>
      <div ng-if="vm.locations.length">
        <div map-lazy-load="https://maps.google.com/maps/api/js?key=AIzaSyArOIEEAcDLl9j8ILIJ1VriYvwuebSM3Zc">
          <ng-map center="[{{vm.locations[0].latitude}} , {{vm.locations[0].longitude}}]"
            zoom="14" style="height:255px">
            <custom-marker position="[{{ marker.latitude }}, {{ marker.longitude }}]"
              ng-repeat="marker in vm.locations">
              <div class="marker-info-window">
                <b>{{ marker.formatDate }}</b>
              </div>
            </custom-marker>
            <marker position="[{{ marker.latitude }}, {{ marker.longitude }}]"
              ng-repeat="marker in vm.locations" icon="/dist/assets/images/marker-icon.png">
            </marker>
          </ng-map>
        </div>
      </div>
    </div>
  `,
};

export default angular
  .module('common.components.panels.recentLocationsPanel', [])
  .component('recentLocationsPanel', recentLocationsPanel);
