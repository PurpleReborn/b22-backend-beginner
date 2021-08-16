const connection = require('../helpers/db')

const table = 'users'

exports.createUser = (data, cb) => {
  connection.query(`
  INSERT INTO ${table} (number, email, password) VALUES (?,?,?)
  `, [data.number, data.email, data.password], cb)
}

exports.getUserByEmail = (email, cb) => {
  connection.query(`
  SELECT id, email, password FROM users WHERE email=? 
  `, [email], cb)
}

exports.getUserById = (id, cb) => {
  connection.query(`
  SELECT id, picture, name, email, address FROM users WHERE id=?
  `, [id], cb)
}

exports.getUserById2 = (id, cb) => {
  connection.query(`
  SELECT id, name, picture, email, address, number FROM ${table} WHERE id = ?
  `, [id], cb)
}

exports.getUserByPhone = (data, cb) => {
  connection.query(`SELECT * from ${table} WHERE phoneNumber=?`, [data.number], cb)
}
