// ./userpass contains a variable called "connection" who contains the URL to connect this app with Atlas DB 
const connection = require('./userpass');
const config = {
	dbUrl: process.env.DB_URL || connection.connection,
	port: process.env.PORT || 3000,
	host: process.env.HOST ||  'http://localhost',
	publicRoute: process.env.PUBLIC_ROUTE || '/app',
	filesRoute: process.env.FILES_ROUTE || 'files'

};

module.exports = config;