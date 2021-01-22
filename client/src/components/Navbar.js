import React from "react";


function Navbar(props) {
    
    
return(
<div className="nav">
    <h1>Hello {props.name} and {props.name2}</h1>
    {props.children}
    
</div>
);
}

export default Navbar;