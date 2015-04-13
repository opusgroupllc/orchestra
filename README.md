# Orchestra

> Orchestra is a developer communication and information tool loosely based on Github's internal Team.

## How its Made
### Front End Client
[Chaplin.js](http://chaplinjs.org/) and [Backbone.js](http://backbonejs.org/)

### Backend API
- [Padrino](http://www.padrinorb.com/)
- [API Documentation](http://opusgroupllc.github.io/orchestra-api-docs/#introduction)


```shell
$ bundle install
$ padrino rake db:migrate seed
$ pardino start
```

The API is secured using JWT.  Run the seed file to add a default user.

```shell
$ rake db:seed
#=> test@test.com # email
#=> test #password
```
