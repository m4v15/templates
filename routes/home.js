const path = require('path');

const handler = (request, reply) => {
  let data =  {
    title: 'This is the home Page',
    message: 'Make helper functions for the following routes: /reverse /upper /lower'
  }
  reply.view('index', data);
}

module.exports = {
  method: 'GET',
  path: '/',
  handler: handler
}
