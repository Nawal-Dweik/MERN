import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Pokemons = props => {
    //Note the second argument is an empty array. We are only 
    const [responseData, setResponseData] = useState(null);

const onClickHandler =  (e) => {
    axios.get('https://pokeapi.co/api/v2/pokemon/?limit=807')
    .then(response=>{setResponseData(response.data.results)}) 
}
    return(
        <div>
            <button onClick={e => onClickHandler(e)}>Get Pokemons names</button>
            
            {responseData ? responseData.map((item,index) => {
                return(<div key={index}>{item.name}</div>)
            }):null}
        </div>
    )
}

export default Pokemons;