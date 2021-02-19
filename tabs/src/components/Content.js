import react, { useState } from 'react';

const content = (props) => {
 
   return(
       <div className="content-box">{props.currentTab} content is showing here.</div>
   )
}; 

export default content;