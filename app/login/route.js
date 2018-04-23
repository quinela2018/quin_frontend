import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Route.extend(UnauthenticatedRouteMixin, {
  session: service(),
  actions: {
    doLogin(identification, password) {
      this.get('session')
        .authenticate('authenticator:oauth2', identification, password)
        .then(() => { this.transitionTo('test'); })
        .catch((reason) => { this.set('errorMessage', reason.error); });
    }
  }
});
