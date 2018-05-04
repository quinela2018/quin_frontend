import Mixin from '@ember/object/mixin';
import { computed } from '@ember/object';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Mixin.create(AuthenticatedRouteMixin, {
  authenticationRoute: computed(function() {
    return '/';
  }),
});
