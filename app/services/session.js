import Service from '@ember/service';

export default Service.extend({
  user: null,
  login(user) {
    this.set('user', user);
  },
  logout(user) {
    this.set('user', null);
  }
});
