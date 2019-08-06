import React from 'react';
import HttpsRedirect from 'react-https-redirect'; 

// you can also use a "disabled" prop to dinamically disable it
// <HttpsRedirect disabled={...}>
 
const httpsRedirect = (props) => {
    return (
      <HttpsRedirect>
        {props.children}
      </HttpsRedirect>
    );
}

export default httpsRedirect;