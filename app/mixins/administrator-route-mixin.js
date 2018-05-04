import Mixin from '@ember/object/mixin';
import AuthenticatedRouteMixin from './custom-authenticated-route-mixin';

export default Mixin.create(AuthenticatedRouteMixin, {
  beforeModel() {
      if (!this.get('session.isAuthenticated') &&!this.get("session.data.authenticated.info.admin")) {
        this.triggerAuthentication();
      } else if (this.get('session.isAuthenticated') && !this.get("session.data.authenticated.info.admin")) {
        this.transitionTo('home');
      } else {
        return this._super(...arguments);
      }
  }
});
