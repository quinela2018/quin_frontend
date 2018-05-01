import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  name: computed(function() {
    const {firstName, lastName} = this.userInformation;
    return `${firstName} ${lastName}`;
  }),
});
