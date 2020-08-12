import React, { useState } from 'react';
import data from './data.json';
import Loader from './loader.js';

console.log(data);
function App() {
	
	const [loaderList, setLoaderList] = useState([]);

	function handleClick() {
		setLoaderList(data.loaders)
	}

	return(
		<div>
			Que linda aplicacion hecha con React.js
			<ul>
				{
					loaderList.map(item => <Loader {...item} key={item.id}/>)
				}
			</ul>
			<button onClick={handleClick} >Mostrar lo aprendido hasta el momento</button>
		</div>
	);
}

export default App;