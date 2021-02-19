import react, { useState } from 'react';
    
    
const ColorForm = (props) => {
    const [color, setColor] = useState("");
    
    const colorHandler = (e) => {
        e.preventDefault();
        props.boxColor(color);
    };
    
    return (
        <form onSubmit={(e) => colorHandler(e) }>
            <label>Color</label>
            <input type="text" onChange={ (e) => setColor(e.target.value)}></input>
            <input type="submit" value="Add"/>
        </form>
    );
};
    
export default ColorForm;