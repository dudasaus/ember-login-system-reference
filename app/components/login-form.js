import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  session: service(),
  username: '',
  actions: {
    login() {
      this.get('session').login(this.get('username'));
      this.set('username', '');
    },
    logout() {
      this.get('session').logout();
    }
  }
});
