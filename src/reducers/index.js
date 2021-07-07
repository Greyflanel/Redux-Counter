import { INCREMENT, DECREMENT } from '../actions';

const initialState = {
  count: 0
}

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?

export default (state = initialState, action) => {
  // let count = 0;

  switch (action.type) {
    case INCREMENT:
    // return initialState.count++
    // initialState.count = 0
    return {count: state.count + 1 }
    //             ^ how we want to change it
    //      ^ what we want to chang
    // Fill in the body of this case
    case DECREMENT:
    return {count: state.count - 1 }
    // Fill in the body of this case
    default:
      return state;
  }
  
  
};
