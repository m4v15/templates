# templates
Using helpers and templates

1. Clone this repo
2. Run npm i
3. Run node server.js

## What

A simple working hapi server using handlebars and helper functions to serve up a basic file.

## How

We create a helper folder in the same folder as the main template, and then js helper files within that folder, and direct to it with the server.views options:

```js
  server.views({
    engines: {
      hbs:require('handlebars')
    },
    relativeTo: __dirname,
    helpersPath: 'templates/helpers',
    path: 'templates'
  })
```
Our helper file is ```reverse.js``` so this is what we call in the main template, passing it an argument (message)

```hbs
  <body>
      {{reverse message}}
    </body>
```

Our helper file, contains some basic code to do something to the argument:

```js
const reverse = (string) => {
  return string.split("").reverse().join("");
}


module.exports = (message) => {
  return reverse(message)
}
```

We define a function, and then export that function being called with an argument. This is what will happen to the argument that we passed it in the template above.

Finally, in your handler, you need to use ```reply.view``` and call the template, and then an object containing keys of the handlebar variables in our template, and values of what we want them to be.

```js
  reply.view('index', {
    title: 'Our title',
    message: 'HELP ME I AM BACKWARDS'
  });
  ```
  
  Try changing the message, or function in the helper file, or create other helper files and use more handlebar variables to do fun things.
