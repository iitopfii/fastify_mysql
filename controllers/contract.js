const moment = require('moment'); 
const { query } = require('../config/db')

const getContractList = async (req,reply) => {
    const sql = 'SELECT * FROM contract'
    const rows = await query(sql)
    return reply.send(rows)
}

module.exports = { 
    getContractList , 
}