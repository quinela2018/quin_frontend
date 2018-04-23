export default function() {
  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  this.post('/token', (/*schema, request*/) => {
    //console.log(request.requestBody);
    return {
      "access_token":"ACCESS_TOKEN",
      "token_type":"bearer",
      "expires_in":1500, //in seconds
      "refresh_token":"REFRESH_TOKEN",
      "scope":"read",
      "uid":100101,
      "info": {
        "firstName":"Alberto",
        "lastName": "Navarro",
        "email":"alberto.navarro@test.com"
      }
    };
  });
  this.post('/revoke', () => {
    return true;
  })
  this.namespace = 'api';

  // this.get('/authors', (schema, request) => {
  //   return schema.authors.all();
  // });
  this.get('/authors');
  this.get('/authors/:id');
  this.get('/users');
  this.get('/users/:id');
}
