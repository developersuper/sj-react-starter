import actionTypes from 'redux/actionTypes'

let sampleData = typeof window !== 'undefined' && window.localStorage.getItem('sample');
const initialState = sampleData ? sampleData : {};

const sample = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes?.UPDATE_SAMPLE:
      console.log(state, action.payload)
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}

export default sample