const custom = (props) => {
    const wordStyle = { 
        background: props.bgdColor,
        color: props.fontColor
     };
    return isNaN(props.parameter) ? <p style={ wordStyle}>This is a word: {props.parameter}</p> : <p> {props.parameter} is not a word!</p>

};
export default custom;