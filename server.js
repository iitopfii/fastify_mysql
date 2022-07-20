const fastify = require('fastify')()

const routes = require('./routes')

fastify.register(require('@fastify/formbody'))

fastify.register(require('@fastify/cors'), { 
    
    origin: '*',
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
    credentials: true,
    maxAge: 86400,
    preflightContinue: false

  })

fastify.register(routes)


fastify.listen(3000, '0.0.0.0', err => {
  if (err) throw err
  console.log(`server listening on ${fastify.server.address().port}`)
})