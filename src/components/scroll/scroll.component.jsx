import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{ overflow: 'scroll', border: '5px solid black', height: '800px', background: "#dcedc8"}}>
      {props.children}
    </div>
  );
};

export default Scroll;