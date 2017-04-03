const path = require('path');

const handler = (request, reply) => {
  let data =  {
    title: 'This is the to LowerCase page',
    message: 'I SHOULD BE LOWER CASE',
    changer: 'I SHOULD BE LOWER CASE'
  }
  reply.view('lower', data);
}

module.exports = {
  method: 'GET',
  path: '/lower',
  handler: handler
}
