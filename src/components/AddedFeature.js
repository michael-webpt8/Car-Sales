import React from 'react';

const AddedFeature = props => {
  const { removeFeature, feature } = props;
  console.log('ITEMS', props.featureId);
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={() => removeFeature(feature)} className='button'>
        X
      </button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
