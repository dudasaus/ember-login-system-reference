# Building login-system

Notes for me to reference later

## ember-cli reference

- `ember g` = `ember generate`
- `ember s` = `ember serve`, defaults to port 4200
- `ember build` or `ember build -prod` builds to `/dist/` directory

## Setting up routes

1. Remove the welcome page component from `app/templates/application.hbs`
1. Generate index route with `ember g index` for the `/` path
1. Generate account route with `ember g account` for the `/account/` path
1. Add header and navigation to `app/templates/application.hbs` so they appear
one every page
  - Use `{{#link-to "routeName"}}Link Text{{/link-to}}` helper to make links
1. Add HTML to `index.hbs` and `accounts.hbs` templates that will appear in the
`{{outlet}}` section of `application.hbs`.

## Make a session service to remember logged in user

1. `ember g service session` to make `app/services/session.js`
1. In the above file, use `this.get()` and `this.set` to access member
variables in member functions

## Create a component to display whether a user is logged in or not

1. `ember g component display-logged-in` will create 2 files,
`app/components/display-logged-in.js` and
`app/templates/components/display-logged-in.hbs`
1. Our component needs to access our session service to see if a user is
logged in, so edit `display-logged-in.js`
  - `import { inject as service } from '@ember/service';` to inject/use a
  service
  - Add the session service as a member variable using
  `session: service('session')` or  `session: service()` will default correctly
1. Now in `display-logged-in.hbs` you can access the service. Use `if` and
`else` helpers to display different content if the user is logged in or not.
  - `{{#if session.user}} Logged in {{else}} Not logged in {{/if}}`
