const hapi = require('hapi');
const vision = require('vision');
const path = require('path');
const routes = require('./routes/index.js');

const server = new hapi.Server()


server.connection({
  host: 'localhost',
  port: Number(process.argv[2] || 4040)
})

server.register(vision, function(err){
  if (err) throw err;

  server.views({
    engines: {
      hbs:require('handlebars')
    },
    relativeTo: __dirname,
    helpersPath: 'views/helpers',
    path: 'views',
    layout: 'default',
    partialsPath: 'views/partials',
    layoutPath: 'views/layout'
  })

  server.route(routes);

  server.start((err) => {
    if (err) throw err;
    console.log('Server running at:', server.info.uri);
  });
});
