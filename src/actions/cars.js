export const ADD_EXTRA_FEATURE = 'ADD_EXTRA_FEATURE';
export const REMOVE_EXTRA_FEATURE = 'REMOVE_EXTRA_FEATURE';

export function addFeature(feature) {
  return {
    type: ADD_EXTRA_FEATURE,
    payload: feature
  };
}

export function removeFeature(feature) {
  return {
    type: REMOVE_EXTRA_FEATURE,
    payload: feature
  };
}
