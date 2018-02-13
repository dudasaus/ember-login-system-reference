# Building login-system

Notes for me to reference later

## ember-cli reference

- `ember g` = `ember generate`
- `ember s` = `ember serve`, defaults to port 4200
- `ember build` or `ember build -prod` builds to `/dist/` directory

## Setting up routes

- Remove the welcome page component from `app/templates/application.hbs`
- Generate index route with `ember g index` for the `/` path
- Generate account route with `ember g account` for the `/account/` path
- Add header and navigation to `app/templates/application.hbs` so they appear
on every page
  - Use `{{#link-to "routeName"}}Link Text{{/link-to}}` helper to make links
- Add HTML to `index.hbs` and `accounts.hbs` templates that will appear in the
`{{outlet}}` section of `application.hbs`.

## Make a session service to remember logged in user

- `ember g service session` to make `app/services/session.js`
- Add member variables and functions you want to access during the session,
e.g. `user`, `login(username)`, `logout()`
- In the above file, use `this.get()` and `this.set()` to access member
variables in member functions

## Create a component to display whether a user is logged in or not

- `ember g component display-logged-in` will create 2 files,
`app/components/display-logged-in.js` and
`app/templates/components/display-logged-in.hbs`
- Our component needs to access our session service to see if a user is
logged in, so edit `display-logged-in.js`
  - `import { inject as service } from '@ember/service';` to inject/use a
  service
  - Add the session service as a member variable using
  `session: service('session')` or  `session: service()` will default correctly
- Now in `display-logged-in.hbs` you can access the service. Use `if` and
`else` helpers to display different content if the user is logged in or not.
  - `{{#if session.user}} Logged in {{else}} Not logged in {{/if}}`
- Put this component in another template with `{{display-logged-in}}`

## Create a login form component

__Note:__ we're going to start without any real accounts or authentication.
Just enter a username to log in as that user.

- `ember g component login-form`
- Inject the session service as a member variable, create a `username` member
variable set to an empty string, and create `login` and `logout` actions by
adding a member variable `actions` object with `login` and `logout` functions
  - Remember, your member functions must use `this.get()` and `this.set()` to
  access/edit member variables
  - `username` will be bound to a text input, so set it back to empty string
  when someone logs in
  - Use your session service's functions to store the logged in user:
  `this.get('session').login(this.get('user'))`
- In the template, display a form if the user isn't logged in or a logout
button if they are logged in
  - `<button {{ action "logout" }}>Logout</button>` will trigger the `logout`
  action from the component when pressed
  - `{{input value=username placeholder="Username"}}` will make a text input
  bound to the username variable from the component
- Put this component in the `accounts.hbs` template
