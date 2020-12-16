const createStore = (reducer, initialState) => {
  let state = initialState;
  let updater = () => {};

  const getState = () => state;
  const dispatch = (action) => {
    state = reducer(state, action);
    updater();
  }
  const subsribe = (listener) => {
    updater = listener;
  }

  return {
    getState,
    dispatch,
    subsribe
  }
}

function combineReducers() {
  // Your code here
}

export {
  createStore,
  combineReducers
};