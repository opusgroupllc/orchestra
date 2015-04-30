# Orchestra

> Orchestra is a developer communication and information tool loosely based on Github's internal Team.

## How its Made
### Front End Client
[Chaplin.js](http://chaplinjs.org/) and [Backbone.js](http://backbonejs.org/)

### Backend API
We use [Padrino](http://www.padrinorb.com/) for the backend API.

```shell
$ cd server
$ bundle install
$ padrino rake db:migrate seed
$ padrino start
```

The API is secured using JWT.  Run the seed file to add a default user.

```shell
$ rake db:seed
#=> test@test.com # email
#=> test #password
```
#### API Documentation
 Now that you are up and running, check out the [API Documentation](http://opusgroupllc.github.io/orchestra-api-docs/#introduction).
