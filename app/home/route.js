import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import AuthenticatedRouteMixin from '../mixins/custom-authenticated-route-mixin';

export default Route.extend(AuthenticatedRouteMixin, {
  session: service(),
  sessionAccount: service("session-account"),
  beforeModel() {
    return this._loadCurrentUser();
  },
  _loadCurrentUser() {
    return this.get('sessionAccount').loadCurrentUser().catch(() => this.get('session').invalidate());
  }
});
