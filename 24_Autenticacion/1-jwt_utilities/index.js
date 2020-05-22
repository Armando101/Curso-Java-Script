const jwt = require('jsonwebtoken');

const [, , option, secret, nameOrToken ] = process.argv;

if (!option || !secret || !nameOrToken) {
	return console.log('Missing arguments');
}

function signToken(payload, secret) {
	return jwt.sign(payload, secret);
}

function verifyToken(token, secret) {
	return jwt.verify(token, secret); // Nos retorna el payload ya que es lo que utilizamos en la aplicación
}

if (option == 'sign') {
	console.log(signToken({ sub: nameOrToken }, secret ));
} else if (option == 'verify') {
	console.log(verifyToken(nameOrToken, secret));
} else {
	console.log('Options needs to be "sign" or "verify"');
}

// Ejemplo de uso
// node index.js sign secret armando

// node index.js verify secret eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhcm1hbmRvIiwiaWF0IjoxNTkwMTM4MzUyfQ.wKAB3gpAseVuyU_eBECfHX6w8_0FE0E1DKo07E090HU