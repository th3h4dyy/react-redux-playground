// const { configureStore } = require('@reduxjs/toolkit');
const redux = require('redux');
const applyMiddleWare = redux.applyMiddleware;
const { createLogger } = require('redux-logger');
const logger = createLogger();

const BUY_CAKE = 'BUY_CAKE';
const BUY_COLA = 'BUY_COLA';

// CREATE ACTION CREATEOR: function that returns an object that describe the action.
// Actions: describe the actions.
function buyCake() {
  return {
    type: BUY_CAKE,
    info: 'first action by redux',
  };
}

function buyCola() {
  return {
    type: BUY_COLA,
    info: 'second action by redux',
  };
}

// create the state object that managed by the redux store.
// const initialState = {
//   numOfCakes: 10,
//   numOfCola: 20,
// };

const initialCakesState = {
  numOfCakes: 10,
};

const initialColaState = {
  numOfCola: 20,
};

const initialState = {
  numOfCakes: 10,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
}

// create the reducer: how the state gonna change.
function colaReducer(state = initialColaState, action) {
  switch (action.type) {
    case BUY_COLA:
      return {
        ...state,
        numOfCola: state.numOfCola - 1,
      };
    default:
      return state;
  }
}

function cakeReducer(state = initialCakesState, action) {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
}

// Multiple reducers
const rootReducer = redux.combineReducers({
  cake: cakeReducer,
  cola: colaReducer,
});

const store = redux.createStore(rootReducer, applyMiddleWare(logger));
// const store = configureStore({ reducer: reducer });
console.log(`the initial state: `, store.getState());
const unsubscribe = store.subscribe(() => {});
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCola());
store.dispatch(buyCola());

// // selectors let you select some values directly from state object.
// const selectCakeValue = (state) => state.numOfCakes;
// const currentValue = selectCakeValue(store.getState());

// console.log(currentValue);

unsubscribe();
