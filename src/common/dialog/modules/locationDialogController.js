import ChatModuleDialogController from './chatModuleDialogController';

export default class LocationModuleDialogController extends ChatModuleDialogController {

  /*@ngInject*/
  constructor($scope, $log, ModuleService, lodash, moment) {

    super($scope, $log, ModuleService, lodash);

    this.$scope = $scope;
    this.moment = moment;
    $log.debug(this.$scope.ngDialogData);
  }

  switchModule() {
    this.getModule();
  }

  handleGetModule(queryString, responseData) {
    if (!queryString) {
      if (responseData.length) {
        this.locationSelectDate = {
          time: this.moment(responseData[0].date),
        };
        this.selectLocationDate(0);
      } else {
        this.locationSelectDate = {
          time: this.moment(),
        };
      }
    } else {
      this.module = { locations: this.setLocationDate(responseData) };
    }
  }

  processModuleData(data) {
    this.moduleData = this.combineOldAndNewData(this.moduleData, data);
  }

  setLocationDate(data) {
    let locationArr = [];
    data.forEach((o) => {
      let data = o;
      data.formatDate = this.moment(data.date).format('HH:mm');
      locationArr.push(data);
    });
    return locationArr;
  }

  selectLocationDate(day) {
    this.locationSelectDate.time.add(day, 'days');
    let fromDate = this.locationSelectDate.time.format('YYYY/MM/DD');

    // Future usage
    let toDate = this.locationSelectDate.time.clone().add(1, 'days').format('YYYY/MM/DD');
    let queryString = `filters[from]=${fromDate}&filters[to]=${toDate}`;
    this.getModule(queryString);
  }
}
