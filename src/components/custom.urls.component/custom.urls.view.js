/* Node Modules */
import React from 'react';
/* Components */
import HeadingComponent from '../../components/heading.component';

export default (props) => {
  return (
    <>
      <HeadingComponent heading="h3">
        Custom Urls <span>+</span>
      </HeadingComponent>
      <div>
        {props.customData && props.customData.map((el, i) => {
          const inputName = `name${i}`;
          return (
            <div key={i} className="col-xs-6">
              <input type="input" id={inputName} className="form-control" name={inputName} val={el} />
            </div>
          )
        })}
      </div>
    </>
  )
};
