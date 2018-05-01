import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  email: faker.internet.email(),
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  phone: faker.phone.phoneNumber(),
  password: faker.internet.password()
});
