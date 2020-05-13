# Hunab-MQTT

## `agent/conected`

```js
{
	agent: {
		uuid,		// auto generar
		username,	// definir por configuración
		name,		// definir por configuración
		hostname,	// obtener del sistema operativo
		pid			// obtener del proceso
	}
}
```

## `agent/disconected`

```js
{
	agent: {
		uuid
	}
}
```

## `agent/message`

```js
{
	agent,
	metrics: [
		{
			type,
			value
		}
	],
	timestamp		// generar cuando creamos el mensaje
}
```