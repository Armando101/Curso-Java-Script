## Message broker

Un message broker es un intermediario que se encarga de recibir un mensaje y distribuirlo a quienes estén conectados a este broker.  

__MQTT__ es un protocolo específico para trabajar con aplicaciones de internet de las cosas, es un protocolo Machine to Machine, está pensado para que pueda tener clientes corriendo en dispositivos que son limitados en memoria, ancho de banda CPU, etc.  

El módulo que usaremos será __MOSCA__, le puedo definir que tipo de backend le vamos a mandar a la hora de definir los mensajes para poder tener mayor rendimiento.