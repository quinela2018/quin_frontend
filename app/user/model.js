import DS from 'ember-data';
import { computed } from '@ember/object';
const { attr, Model } = DS;

export default Model.extend({
  email: attr('string'),
  firstName: attr('string'),
  lastName: attr('string'),
  phone: attr('string'),
  password: attr('string'),
  username: computed('firstName', 'lastName', function() {
    return `${this.firstName} ${this.lastName}`;
  }),
  formattedPhone: computed('phone', function() {
    const phone = this.phone || '';
    let formattedPhone = '';
    const first = phone.toString().substr(0,4);
    const second = phone.toString().substr(4,8);
    if (first) {
      formattedPhone += `${first}`;
    }
    if (second) {
      if (second.length >= 1) {
        formattedPhone += `-`;
      }
      formattedPhone += `${second}`;
    }
    return formattedPhone;
  })
});
