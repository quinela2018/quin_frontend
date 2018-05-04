import Response from 'ember-cli-mirage/response';

export default function() {
  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  this.post('/token', ({ users }, request) => {
    const parts = request.requestBody.split("&");
    let username = parts[1].split("=")[1];
    username = decodeURIComponent(username);
    const token = {
      "access_token":"ACCESS_TOKEN",
      "token_type":"bearer",
      "expires_in":1500, //in seconds
      "refresh_token":"REFRESH_TOKEN",
      "scope":"read",
      "uid": undefined,
      "info": undefined
    }
    const user = users.findBy({email: username});
    if(user != null) {
      token.uid = user.attrs.id;
      token.info = {
        "firstName": user.attrs.firstName,
        "lastName": user.attrs.lastName,
        "email": user.attrs.email,
        "admin": user.attrs.admin
      };
      return token;
    } else {
      return new Response(422, {some: 'header', 'Content-Type': 'application/json'}, {
      errors: [{
        status: 422,
        title: 'email is invalid',
        description: 'email cannot be blank'
      }]
    });
    }
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
  this.get('/users', ({ users }, request) => {
    let response;
    let qp = JSON.parse(JSON.stringify(request.queryParams));
    if(qp && qp.email) {
      response = users.findBy({email: qp.email});
    } else {
      response = users.all();
    }
    return response;
  });
  this.get('/users/:id');
  this.post('/users', 'user');
}
