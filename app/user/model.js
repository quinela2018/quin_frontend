import DS from 'ember-data';
import { computed } from '@ember/object';
const { attr, Model } = DS;

export default Model.extend({
  email: attr('string'),
  firstName: attr('string'),
  lastName: attr('string'),
  username: computed('firstName', 'lastName', function() {
    return `${this.firstName} ${this.lastName}`;
  }),
});
