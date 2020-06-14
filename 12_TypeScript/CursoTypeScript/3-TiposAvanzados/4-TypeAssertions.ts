// Type Assertions nos permite poner reasignar el tipo de dato que TS ya había asignado por defecto
interface AJAXSettings {
	url: string;
}

const options = {} as AJAXSettings;
options.url = 'https:github.com/Armando101';