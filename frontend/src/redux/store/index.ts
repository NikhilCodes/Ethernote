import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { authReducer } from '../reducers/authReducer';
import thunk from 'redux-thunk';
import { scratchReducer } from '../reducers/scratchReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  scratch: scratchReducer,
});

const composeEnhancers = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export default createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk)),
);

export type RootState = ReturnType<typeof rootReducer>
