import React, { useEffect, useState } from 'react';

const Pokemons = (props) => {
    const [state, setState] = useState(0);

const onClickHandler = e => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=807')
    .then(response => {
        return response.json()
    })
    .then(response => {
        setState({
            pokemons: response.results
        })
    })

}
        

    return(
        <div>
            <button onClick={e => onClickHandler(e)} >Get Pokemons</button>
            {state.pokemons ? state.pokemons.map((item,index) => {
                return(<div key={index}>{item.name}</div>)
            }):null}
        </div>
    );
}
export default Pokemons;