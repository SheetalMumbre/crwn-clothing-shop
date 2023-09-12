import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage'
import thunk  from 'redux-thunk';
// import createSagaMiddleware from 'redux-saga';

// import { rootSaga } from './root-saga';

import { rootReducer } from './root-reducer';

const persistConfig = {
  key : 'root',
  storage,
  whitelist : ['cart']
}

// const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

// const middleWares = [logger];

//to hide log in 'production' and display in 'development' only
//env=logger

const middleWares = [process.env.NODE_ENV === 'development' && logger, thunk].filter(
  Boolean
);

// const middleWares = [process.env.NODE_ENV === 'development' && logger, sagaMiddleware].filter(
//   Boolean
// );

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composedEnhancers);

// sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);