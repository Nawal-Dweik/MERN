import react, { useState } from 'react';
    
    
const Tab = (props) => {

    const [clickedTab, setClickedTab] = useState("");
    const tabs = Object.freeze(["TAB1","TAB2","TAB3"])
      const onClickHandler = (e, value) => {
        e.preventDefault();
        setClickedTab(value);
        props.currentTab(value);
    }
    return (
        
        tabs.map(t=>{
                
            return <button className="tab" onClick={ (e) => onClickHandler(e, t) }>{ t }</button>
        }
        )
            
        
    );
};
    
export default Tab;
