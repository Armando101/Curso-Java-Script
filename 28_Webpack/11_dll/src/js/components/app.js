import React, { useState } from 'react'
import data from './data.json'
import Loader from './loader'

import logo from '../../images/platzi.png';
import video from '../../video/que-es-core.mp4';

function App(){
    const [loaderList, setLoaderList] = useState([])
    function handleClick(){
        setLoaderList(data.loaders)
    }
    return (
        <div>
            Que linda aplicacion hecha en react.js
            <video src={video} width={360} controls poster={logo}></video>
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