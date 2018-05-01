import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';

export default Controller.extend({
  session: service(),
  showHome: alias('session.isAuthenticated'),
  showRegister: false,
  showLogin: false,
  user: null,
  actions: {
    showRegisterAction(){
      this.set("user", this.store.createRecord("user"));
      this.set("showRegister", true);
    },
    showLoginAction() {
      this.set("showLogin", true);
    },
    loginAction(identification, password) {
      this.send('doLogin', identification, password);
    },
    registerAction(user, passwordConfirmation) {
      this.send('doRegister', user, passwordConfirmation);
    }
  }
});
