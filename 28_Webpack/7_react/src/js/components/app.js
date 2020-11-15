import React, { useState } from 'react'
import data from './data.json'
import Loader from './loader'

function App(){
    const [loaderList, setLoaderList] = useState([])
    function handleClick(){
        setLoaderList(data.loaders)
    }
    return (
        <div>
            que linda aplicacion hecha en react.js
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