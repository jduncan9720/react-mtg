import React from "react";


function Footer(props) {
    
return(
<div className="nav">
    <h1>This is the Footer</h1>
    <button onClick={() => props.setName2("Tiffany")}>Change</button>
</div>
);
}

export default Footer;