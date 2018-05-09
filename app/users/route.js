import Route from '@ember/routing/route';
import AdministratorRouteMixin from '../mixins/administrator-route-mixin';

export default Route.extend(AdministratorRouteMixin, {
  model(){
    return this.store.findAll('user');
  }
});
