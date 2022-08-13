import Tilt from 'react-tilt'
import React from "react";
import './logo.css'

import App from "../../App";
const Logo =()=> {
    return(
        
       <div className="ma4 mt0">       
  <Tilt className="Tilt" br2 shadow2 options={{ max : 25 }} style={{ height: 150, width: 150 }} >
  <div className="Tilt-inner"> 👽 </div>
  </Tilt>
       </div>
    );
}
export default Logo;