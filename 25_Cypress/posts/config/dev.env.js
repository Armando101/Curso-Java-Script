'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

const env = merge(prodEnv, {
  NODE_ENV: '"development"'
})

console.log(env)
module.exports = env
