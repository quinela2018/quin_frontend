import Component from '@ember/component';

export default Component.extend({
  actions: {
    updatePhone(value){
      const user = this.user;
      const newValue = value.replace(/-/g, '');
      if (newValue.length <= 8 && /^\d+$/.test(newValue)) {
        user.set('phone', newValue);
      }
      user.notifyPropertyChange('phone');
    }
  }
});
