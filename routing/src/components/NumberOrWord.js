const numberOrWord = (props) => {
    return isNaN(props.parameter) ? <p>This is a word: {props.parameter}</p> : <p>This is a number: {props.parameter}</p>

};
export default numberOrWord;