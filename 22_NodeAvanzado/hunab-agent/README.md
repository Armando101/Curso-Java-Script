# Hunab-agent

## Usage

```js
const HunabAgent = require('hunab-agent');

const agent = new HunabAgent({
	interval: 2000
});

agent.connect();

agent.on('agent/message', payload => {
	console.log(payload);
});

setTimeout(() => agent.disconnected(), 20000);
```