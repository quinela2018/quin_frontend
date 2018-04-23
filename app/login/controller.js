import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    login(identification, password) {
      this.send('doLogin', identification, password);
    }
  }
});
