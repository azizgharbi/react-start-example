import React from 'react';
import TestContext from "./../store/store"


export default function MyRoomColor(props){
    return(
        <TestContext.Consumer>
          {color => (
            <p> 
                {color} 
            </p>
          )}
          </TestContext.Consumer>
    );
  }