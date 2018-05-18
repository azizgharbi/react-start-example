import React from 'react';
import TestContext from "./../store/store"


export default function MyRoomColor(props){
    return(
        <TestContext.Consumer>
          {name => (
            <p> 
               {name} 
            </p>
          )}
          </TestContext.Consumer>
    );
  }