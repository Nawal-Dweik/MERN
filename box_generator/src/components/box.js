import react, { useState } from 'react';
    
    
const Box = (props) => {
    return (
    <span>
        {        
        props.color.map((item)=>{
                const boxStyle = {
                    width: "150px",
                    height: "150px",
                    background: item,
                }
                return <div style={boxStyle}></div>
        })
        }
    </span>
    )
};
    
export default Box;