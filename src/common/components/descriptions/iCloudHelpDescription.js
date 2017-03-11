import angular from 'angular';
import 'common/core';

class ICloudHelpDescribeCtrl {
}

const iCloudHelpDescribe = {
  bindings: {
  },
  transclude: true,
  controller: ICloudHelpDescribeCtrl,
  controllerAs: 'vm',
  template: `
    <div class="ftu-dialog__footer ftu-dialog__footer__shadow">
      <div class="row">
        <p class="col-sm-6 ftu-dialog__footer__left">
          Where do I find my child’s iCloud login?
          <br>
              &nbsp;&nbsp;Apple ID
          <br>
            &nbsp;&nbsp;&nbsp;&nbsp;1.	Go to “Settings” on your child’s iPhone.
          <br>
            &nbsp;&nbsp;&nbsp;&nbsp;2.	Tap on “iCloud” and you’ll see the Apple ID.
          <br>
          &nbsp;Password
          <br>
          &nbsp;&nbsp;You should receive a password when you purchase the iPhone. If the password has since changed, 
          you should get it as soon as possible.
        </p>
        <p class="col-sm-6 ftu-dialog__footer__right">
          •	If you forgot the password, click “Forgot Apple ID or password” 
          here (<a href="https://appleid.apple.com/#!&page=signin" target="_blank">link</a>) to retrieve it.
          <br>
          •	Ask your child for it! It’s best to explain to your child the importance of backing up their phone on iCloud 
          in case the phone is damaged, lost or stolen. This is also a great opportunity to talk to your kid about using KidGuard for their safety.
        </p>
      </div>
    </div>
  `,
};

export default angular
  .module('common.components.descriptions.iCloudHelpDescribe', [])
  .component('iCloudHelpDescribe', iCloudHelpDescribe);
