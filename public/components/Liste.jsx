import React from 'react';

const List = props => (
  <ul>
    {
      props.items.map((item, index) => <li key={index}> name :{item.name} - age : {item.age}</li>)
    }
  </ul>
);

export default List;