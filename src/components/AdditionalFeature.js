import React from 'react';
import { connect } from 'react-redux';

import { addFeature } from '../actions/cars';

const AdditionalFeature = (props) => {
	// const { buyItem, id } = props;

	return (
		<li>
			{/* Add an onClick that will let you add a feature to your car */}
			<button onClick={() => props.buyItem()} className="button">
				Add
			</button>
			{props.feature.name} (+{props.feature.price})
		</li>
	);
};

export default connect(
	null,
	{},
	AdditionalFeature
);
