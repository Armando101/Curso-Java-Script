const fs = require('fs');
const file = fs.createWriteStream('./big');

for (let i=0; i<= 1e6; i++) {
	file.write("PUEDO escribir los versos más tristes esta noche. Escribir, por ejemplo: La noche está estrellada, y tiritan, azules, los astros, a lo lejos. El viento de la noche gira en el cielo y canta. Puedo escribir los versos más tristes esta noche. Yo la quise, y a veces ella también me quiso.");
}

file.end();