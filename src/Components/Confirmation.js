import React from 'react';
import '../App.css';
import '../Css/Confirmation.css';


function Confirmation() {
  return (
    <div className="confirmation-container">
      <div className="confirmation-box">
        <h1>Thanks for ordering!</h1>
        
        <p>"Bellalicious pizza is on the way"</p>
        <div className="checkbox-container">
        <input id="#ctl00_bc_custom_element_43_0" type="checkbox" name="ctl00$bc$custom_element_43$0" checked="checked"></input>
        <label for="check">
          <div className="check-icon"></div>
          </label>
          </div>
       </div>   
      
   </div> 

    
  );
}

export default Confirmation;
