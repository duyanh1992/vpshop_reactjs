import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import allReducers from './reducers';
import mySaga from './sagas/categories';
import thunk from 'redux-thunk';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  allReducers,
  applyMiddleware(thunk, sagaMiddleware)
);

sagaMiddleware.run(mySaga);

export default store;