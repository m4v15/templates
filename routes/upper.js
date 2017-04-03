const path = require('path');

const handler = (request, reply) => {
  let data =  {
    title: 'This is the to UpperCase page',
    message: 'i should be upper cased',
    changer: 'i should be upper cased'
  }
  reply.view('upper', data);
}

module.exports = {
  method: 'GET',
  path: '/upper',
  handler: handler
}
