export default class AddDeviceDialogController {

  /*@ngInject*/
  constructor($scope, $log, $auth, $http,
              DeviceService, ListenrService, ToastrService) {
    this.deviceService = DeviceService;
    this.listenrService = ListenrService;
    this.toastrService = ToastrService;
    this.$scope = $scope;
    this.$auth = $auth;
    this.$http = $http;
    this.$log = $log;

    $log.debug(this.$scope.ngDialogData);
    this.dialogData = this.$scope.ngDialogData;
    this.errMessage = '';

    // Add Device Dialog
    this.stateMobileType = this.dialogData.stateMobileType;
    this.deviceType;
    this.firstTimeAddDevice = this.dialogData.firstTimeAddDevice;
    this.buttonText = this.stateMobileType === 'iOS' ? 'Submit' : 'Signin withGoogle';
    this.isSaving = false;
    this.stateMobileAccountEmail = this.dialogData.stateMobileAccountEmail;
    if (this.stateMobileAccountEmail) {
      this.email = this.stateMobileAccountEmail;
    }
  }

  authenticate(provider) {
    let stateMobileAccountEmail = this.stateMobileAccountEmail;
    this.errMessage = '';
    this.$auth.authenticate(provider)
      .then((response) => {
        let token = response.access_token;
        this.$http.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${token}`)
          .then((userResponse) => {
            let signInEmail = userResponse.data.email;
            if (stateMobileAccountEmail) {
              if (signInEmail === stateMobileAccountEmail) {
                this.addDeviceConfirm(stateMobileAccountEmail, token);
              } else {
                this.errMessage = `Make sure you login with '${stateMobileAccountEmail}' email.`;
                this.$auth.logout();
              }
            } else if (signInEmail) {
              this.addDeviceConfirm(signInEmail, token);
            } else {
              this.errMessage = `Make sure you login with '${stateMobileAccountEmail}' email.`;
              this.$auth.logout();
            }
          },
          (error) => {
            this.errMessage = 'Google authentication failed, please try again.';
            this.$auth.logout();
          });
      })
      .catch((response) => {
        this.errMessage = 'Google authentication failed, please try again.';
        this.$auth.logout();
      });
  }

  addDeviceConfirm(googleMail, token) {
    let email;
    let password;
    let type = this.stateMobileType || this.deviceType;

    if (type === 'Android') {
      email = googleMail;
      password = token;
    } else if (type === 'iOS') {
      email = this.email;
      password = this.password;
    }

    if (email && password) {
      this.buttonText = 'Fetching device info...';
      this.isSaving = true;
      this.errMessage = '';

      this.deviceService.addDevice(
        this.dialogData.stateChildId,
        email,
        password,
        type,
        this.twoFaCode,
      )
      .then((value) => {
        if (value.data.devices && !value.data.devices.length) {
          const title = 'No synced data found.';
          const content = `In order for us to retrieve data from the iOS device,
                        iCloud backup must be enabled on the device.
                        Please first enable iCloud backup on the device.
                        iCloud backup automatically syncs anytime the device is on WiFi and charging. <br>
                        <a href="https://support.apple.com/kb/PH12520?locale=en_US&viewlocale=en_US"
                        target="_blank">Apple Support</a>`;
          let body = {
            message: {
              title,
              content,
            },
          };
          this.handleLoginError(type, body);
        } else {
          if (!value.error) {
            this.syncDeviceStatus(token, value.data.devices);
          }
        }
      })
      .catch((response) => {
        this.handleLoginError(type, response.data);
      });
    } else {
      this.toastrService.warning('Please complete the form :)');
    }
  }

  selectType(type) {
    this.deviceType = type;
    this.buttonText = type === 'iOS' ? 'Submit' : 'Signin withGoogle';
    this.errMessage = '';
  }

  syncDeviceStatus(token, devices) {
    this.$scope.closeThisDialog();
    var promises = devices.map((device) =>
      this.deviceService.syncDeviceStatus(this.dialogData.stateChildId, device.id, token).then(() => {
        this.$log.debug('sync device with device id', device.id);
      })
    );

    Promise.all(promises).then(() => {
      this.listenrService.updateMenu();
      this.listenrService.updateDevices();
    });

    this.firstTimeAddDevice ? this.$log.debug('first time add ', this.firstTimeAddDevice) : null;
  }

  handleLoginError(type, body) {
    this.buttonText = type === 'iOS' ? 'Submit' : 'Signin withGoogle';
    if (body.error === '2fa-required') {
      this.showTwoFaCode = true;
      this.errMessage = 'A code has been sent to your device. Please enter code';
    } else {
      this.errMessage = body.message;
    }

    this.isSaving = false;
  }
}
