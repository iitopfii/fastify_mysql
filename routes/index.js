const customers = require('../controllers/customer')
const nationality = require('../controllers/nationality')
const contract = require('../controllers/contract')
const dashboard = require('../controllers/dashboard')

async function routes(fastify, options, next) {
  fastify.get('/', async (request, reply) => {
    return {
      hello: 'world !! this is my api',
      version: '1.0.0'
    }
  })

  fastify.get('/contract', contract.getContractList)


  next()
}

module.exports = routes