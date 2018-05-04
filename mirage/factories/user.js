import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  email() { return faker.internet.email(); },
  firstName() { return faker.name.firstName(); },
  lastName() { return faker.name.lastName(); },
  phone() { return faker.phone.phoneNumber(); } ,
  password() { return faker.internet.password(); }
});
