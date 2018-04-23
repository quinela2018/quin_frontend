import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Component.extend({
  session: service(),
  name: computed(function() {
    const {firstName, lastName} = this.session.data.authenticated.info;
    return `${firstName} ${lastName}`;
  }),
});
