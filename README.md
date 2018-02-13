# Building login-system

Notes for me to reference later

## Setting up routes

1. Remove the welcome page component from `app/templates/application.hbs`
1. Generate index route with `ember g index` for the `/` path
1. Generate account route with `ember g account` for the `/account/` path
1. Add header and navigation to `app/templates/application.hbs` so they appear
one every page
  - Use `{{#link-to "routeName"}}Link Text{{/link-to}}` helper to make links
1. Add HTML to `index.hbs` and `accounts.hbs` templates that will appear in the
`{{outlet}}` section of `application.hbs`.
