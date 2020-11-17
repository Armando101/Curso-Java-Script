import React, { useState } from 'react'
import data from './data.json'
import Loader from './loader'

import logo from '../../images/platzi.png';

function App(){
    const [loaderList, setLoaderList] = useState([])
    async function handleClick(){
        setLoaderList(data.loaders);
        const { alerta } = await import('./alert.js');
        alerta('Omg, este módulo ha cargado dinámicamente')
    }
    return (
        <div>
            Que linda aplicacion hecha en react.js
            <p>
                <img src={logo} alt="imagen"/>
            </p>
            <ul>
                {
                    loaderList.map(item => <Loader {...item} key={item.id}/>)
                }
            </ul>
            <button onClick={handleClick}>Mostar lo Aprendido hasta el momento</button>
        </div>
    )
}

export default App