export default class ChatModuleDialogController {

  /*@ngInject*/
  constructor($scope, $log, ModuleService, lodash) {

    this._ = lodash;
    this.$scope = $scope;
    $log.debug(this.$scope.ngDialogData);
    this.dialogData = this.$scope.ngDialogData;
    this.$scope.errMessage = '';

    // ModuleDialog
    this.moduleService = ModuleService;
    this.$log = $log;

    this.childId = this.dialogData.childId;
    this.deviceId = this.dialogData.deviceId;
    this.moduleId = this.dialogData.moduleId;
    this.childName = this.dialogData.childName;
    this.moduleData = {};
    this.modulePagination = {};
    this.moduleContactData = {};
    this.moduleContactPagination = {};
    this.handle = '';

    if (this.childId && this.deviceId) {
      this.switchModule();
    } else {
      this.$log.debug('device id not found');
    }
  }

  processModuleData(data) {
    this.moduleData = this.combineOldAndNewData(this.moduleData, data.reverse(), true);
  }

  getModuleRecent(queryString) {
    this.moduleService.getModuleRecent(this.childId, this.deviceId, this.moduleId, queryString).then(
      (response) => {
        const responseData = response.data.data;
        this.moduleContactData = this.combineOldAndNewData(this.moduleContactData, responseData);
        this.moduleContactPagination = this._.assign(response.data.pagination, { moduleId: this.moduleId });

        if (this._.isEmpty(this.moduleContactPagination) || this.moduleContactPagination.moduleId !== this.moduleId) {
          this.moduleContactData = {};
        } else {
          let contactHandle = this.moduleContactData[0].handle;
          this.handle = contactHandle;
          let moduleDataQueryString = contactHandle ? this.getEncodedHandleQueryString() : null;
          queryString ? null : this.getModule(moduleDataQueryString);
        }
      }, (error) => {
        this.$log.debug(error);
      }
    );
  }

  /* Module Dialog  */
  getModule(queryString) {
    this.moduleService.getModule(this.childId, this.deviceId, this.moduleId, queryString).then(
      (response) => {
        let responseData = response.data.data;
        const responsePagination = response.data.pagination;

        if (this._.isEmpty(this.modulePagination) || this.modulePagination.moduleId !== this.moduleId) {
          this.moduleData = {};
        }

        this.processModuleData(responseData);
        this.modulePagination = this._.assign(responsePagination, { moduleId: this.moduleId });

        this.handleGetModule(queryString, responseData);
      }, (error) => {
        this.$log.debug(error);
      }
    );
  }

  handleGetModule(queryString, responseData) {
    this.$log.warn(`this should be overrided!`);
  }

  setMoudleDataItem(handle) {
    this.moduleData = {};
    this.handle = handle;
    this.getModule(this.getEncodedHandleQueryString());
  }

  groupData(data, app) {
    let result = this.groupBy(data[app], function (item)
    {
      return [item.handle];
    });

    return result;
  }

  //TODO: This is a group method, future maybe use lodash instead
  groupBy(array, f) {
    let groups = {};
    array.forEach(function (o)
    {
      let group = JSON.stringify(f(o));
      groups[group] = groups[group] || [];
      groups[group].push(o);
    });

    return Object.keys(groups).map(function (group)
    {
      return groups[group];
    });
  }

  loadMore() {
    let pagination = this.modulePagination;
    if (!this._.isEmpty(pagination) && pagination.page < pagination.pageCount) {
      let queryString = this.handle ?
        `page=${pagination.page + 1}&${this.getEncodedHandleQueryString()}`
        :
        `page=${pagination.page + 1}`;
      this.getModule(queryString);
    }
  }

  loadMoreContact() {
    let pagination = this.moduleContactPagination;
    if (!this._.isEmpty(pagination) && pagination.page < pagination.pageCount) {
      let queryString = `page=${pagination.page + 1}`;
      this.getModuleRecent(queryString);
    }
  }

  combineOldAndNewData(oldData, responseData, reverse = false) {
    return reverse ? [...responseData, ...oldData] : [...oldData, ...responseData];
  }

  getEncodedHandleQueryString() {
    return `filters[handle]=${encodeURIComponent(this.handle)}`;
  }
}
