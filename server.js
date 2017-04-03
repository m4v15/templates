const hapi = require('hapi');
const vision = require('vision');
const path = require('path');

const server = new hapi.Server()

const handler = (request, reply) => {

  reply.view('index', {
    title: 'Our title',
    message: 'HELP ME I AM BACKWARDS'
  });
}

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
    helpersPath: 'templates/helpers',
    path: 'templates'
  })

  server.route({ path: '/', method: 'GET', handler});

  server.start((err) => {
    if (err) throw err;
    console.log('Server running at:', server.info.uri);
  });
});
