import React from 'react';
import {connect} from 'react-redux'
import {addCarFeature} from'../actions/carAction'
import {addFeature} from '../actions/featureAction'
const AdditionalFeature = props => {
  const handleClick = (e) => {

    if (props.feature.added === false)
      { props.addCarFeature(props.feature)
        props.addFeature(props.feature)
      }
  }
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={handleClick}className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default connect(null, {addCarFeature, addFeature})(AdditionalFeature);
