'use strict'

const debug = require('debug')('hunab:db:setup')
const inquirer = require('inquirer')
const chalk = require('chalk')
const db = require('./')

// Para preguntar al usario al hacer un setup
const prompt = inquirer.createPromptModule()

async function setup () {
  const answer = await prompt([
    {
      type: 'confirm',
      name: 'setup',
      message: 'This will destroy your database, are you sure?'
    }
  ])
  
  if (!answer.setup) {
  	return console.log('Nothing happend :)')
  }

  const config = {
    database: process.env.DB_NAME || 'hunab',
    username: process.env.DB_USER || 'armando',
    password: process.env.DB_PASS || 'armando',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
    logging: s => debug(s),
    setup: true // Esta opción se utiliza en el index
  }

  await db(config).catch(handleFatalError)

  console.log('Connected to database succesfuly')
  process.exit(0)
}

function handleFatalError (err) {
  console.error(err.message)
  console.error(err.stack)
  process.exit(1)
}

setup()
