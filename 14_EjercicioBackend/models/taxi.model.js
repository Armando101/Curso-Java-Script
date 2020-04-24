'use strict'

class Taxi {
	constructor(placas, anio, engomado, descansos, modelo, descripcion) {
		this.placas = placas;
		this.anio = anio;
		this.engomado = engomado;
		this.descansos = descansos;
		this.modelo = modelo;
		this.descripcion = descripcion;
	}
}

module.exports = Taxi;