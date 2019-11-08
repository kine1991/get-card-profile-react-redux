import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{ overflow: 'scroll', border: '5px solid black', height: '800px', background: 'linear-gradient(to right, #f5f7fa, #c3cfe2)'}}>
      {/* #13547a → #80d0c7   #93a5cf → #e4efe9  #f5f7fa → #c3cfe2 */}

      {props.children}
    </div>
  );
};

export default Scroll;