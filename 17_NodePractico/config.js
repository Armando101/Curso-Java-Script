module.exports = {
	remoteDB: process.env.REMOTE_DB || false,
	api: {
		port: process.env.API_PORT || 3000
	},
	post: {
		port: process.env.POST_PORT || 3002
	},
	jwt: {
		secret: process.env.JWT_SECRET || 'notasecret'
	},
	mysql: {
		host: process.env.MYSQL_HOST || 'localhost',
		user: process.env.MYSQL_USER || 'root',
		password: process.env.MYSQL_PASS || 'toor',
		database: process.env.MYSQL_DB || 'proyecto_node',
	},
	mysqlService: {
		host: process.env.MYSQL_SRV_HOST || 'localhost',
		port: process.env.MYSQL_SRV_PORT || 3001,
	},
	cacheService: {
		host: process.env.CACHE_SRV_HOST || 'localhost',
		port: process.env.CACHE_SRV_PORT || 3003,
	},
	redis: {
		host: process.env.REDIS_HOST || 'redis-14693.c89.us-east-1-3.ec2.cloud.redislabs.com',
		port: process.env.REDIS_PORT || '14693',
		password: process.env.REDIS_PASS || 'MY7Mlub7iAaLkeC90d9GsNYiIVEmbWcn',
	}
}