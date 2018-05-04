import RSVP from 'rsvp';
import Service, { inject as service } from '@ember/service';
import { isEmpty } from '@ember/utils';

export default Service.extend({
  session: service('session'),
  store: service(),
  loadCurrentUser() {
    return new RSVP.Promise((resolve, reject) => {
      const email = this.get('session.data.authenticated.info.email');
      if (!isEmpty(email)) {
          this.get('store').queryRecord('user', {email: email})
            .then((user) => {
              this.set('account', user);
              resolve();
            }).catch(() => reject());
        } else {
          reject();
        }
    });
  }
});
