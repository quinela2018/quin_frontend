import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { isEqual } from '@ember/utils';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Route.extend(ApplicationRouteMixin, {
  session: service(),
  notifications: service('notification-messages'),
  actions: {
    doLogin(identification, password) {
      this.get('session')
        .authenticate('authenticator:oauth2', identification, password)
        .then(() => {
          this.controller.set('showLogin', false);
          this.transitionTo('home'); })
        .catch(() => {
          this.get('notifications').error("Email/Password no son válidos.", {
            autoClear: false
          });
        });
    },
    doRegister(user, passwordConfirmation) {
      this.get('notifications').clearAll();
      if(isEqual(user.get('password'), passwordConfirmation)) {
        user.save()
        .then(()=> {
          this.controller.set('showRegister', false);
        }).catch(()=>{
          this.get('notifications').error("No fue posible registrar el usuario, por favor intentelo más tarde.");
        });
      } else {
          this.get('notifications').error("Las contraseñas no coinciden.", {
            autoClear: false
          });
      }
    }
  }
});
