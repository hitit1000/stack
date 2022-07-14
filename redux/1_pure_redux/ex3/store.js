const redux = require("redux");
const reduxLogger = require("redux-logger");
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();
// action , action-types

const ADD_SUB = "ADD_SUB";
const ADD_VIEW = "ADD_VIEW";
const addSub = () => {
  return {
    type: ADD_SUB,
  };
};
const addView = () => {
  return {
    type: ADD_VIEW,
  };
};

// reducers
const subState = {
  subNumber: 365,
};
const subReducer = (state = subState, action) => {
  switch (action.type) {
    case ADD_SUB:
      return {
        ...state,
        subNumber: state.subNumber + 1,
      };
    default:
      return state;
  }
};

const viewState = {
  viewNumber: 0,
};
const viewReducer = (state = viewState, action) => {
  switch (action.type) {
    case ADD_VIEW:
      return {
        ...state,
        viewNumber: state.viewNumber + 1,
      };
    default:
      return state;
  }
};

// store
const rootReducer = combineReducers({
  sub: subReducer,
  view: viewReducer,
});
const store = redux.createStore(rootReducer, applyMiddleware(logger));

// subscribe - view - dispatch

// store.subscribe(() => {
//   console.log("state change ===>", store.getState());
// });

store.dispatch(addSub());
store.dispatch(addSub());
store.dispatch(addSub());
store.dispatch(addSub());
store.dispatch(addView());
store.dispatch(addView());
