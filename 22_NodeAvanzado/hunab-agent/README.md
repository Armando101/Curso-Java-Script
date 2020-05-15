# Hunab-agent

## Usage

```js
const HunabAgent = require('hunab-agent');

const agent = new HunabAgent({
	interval: 2000
});

agent.connect();

// This agent only
agent.on('connected');
agent.on('disconnected');
agent.on('message');

agent.on('agent/connected');
agent.on('agent/disconnected');
agent.on('agent/message', payload => {
	console.log(payload);
});

setTimeout(() => agent.disconnected(), 20000);
```