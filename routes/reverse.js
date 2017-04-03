const path = require('path');

const handler = (request, reply) => {
  let data =  {
    title: 'This is the reverse page',
    message: 'A man, a plan, a canal: panama!',
    changer: 'A man, a plan, a canal: panama!'
  }
  reply.view('reverse', data);
}

module.exports = {
  method: 'GET',
  path: '/reverse',
  handler: handler
}
