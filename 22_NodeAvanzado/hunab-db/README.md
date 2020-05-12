# Hunab-db

## Usage

```js
const setupDatabase = require('hunab-db');

setupDatabase(config).then(db => {
	const { Agent, Metric } = db
}).catch(err => console.error(err));
```