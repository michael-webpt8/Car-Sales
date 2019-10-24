import React from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { addFeature } from './actions/cars';

const App = props => {
  // const removeFeature = () => {
  // 	// dispatch an action here to remove an item
  // };

  const buyItem = (item) => {
    // dispatch an action here to add an item
	// props.addFeature(item);
	props.addFeature(item);
  };

  return (
    <div className='boxes'>
      <div className='box'>
        <Header />
        <AddedFeatures /*car={state.car} */ />
      </div>
      <div className='box'>
		<AdditionalFeatures 
		buyItem={props.buyItem}
		/>
        <Total /*car={state.car} additionalPrice={state.additionalPrice}*/ />
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  addFeature
};

export default connect(
  null,
  mapDispatchToProps
)(App);
