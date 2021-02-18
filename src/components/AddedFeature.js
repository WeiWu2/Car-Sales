import React from 'react';
import {connect} from 'react-redux'
import {removeCarFeature} from '../actions/carAction'
import {removeFeature} from '../actions/featureAction'
const AddedFeature = props => {
  const handleClick = (e) => {
    props.removeCarFeature(props.feature)
    props.removeFeature(props.feature)
  }
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={handleClick} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default connect(null, {removeCarFeature, removeFeature})(AddedFeature);
