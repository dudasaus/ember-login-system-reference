import Service from '@ember/service';

export default Service.extend({
  user: null,
  login(user) {
    this.set('user', user);
  },
  logout() {
    this.set('user', null);
  }
});
