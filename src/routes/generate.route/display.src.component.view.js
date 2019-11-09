import React from 'react';

export default (props) => {
  return (
    <>

      {props.data && <div>"{props.data}"</div>}
      {!props.data && <div>N/A</div>}

    </>
  )
}
