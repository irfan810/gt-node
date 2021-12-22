var apm = require('elastic-apm-node').start({
  serviceName: 'gt-node',
  
  // Set custom APM Server URL (default: http://localhost:8200)
  serverUrl: 'http://<vm_ip>:30337',
})
var sleep = require('sleep');

// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })

// Declare a route
fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
})
