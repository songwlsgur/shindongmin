import { createStore, applyMiddleware,compose  } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import  {rootSaga} from '../sagas/saga';
import allReducers from '../reducers/reducer'
import { composeWithDevTools } from "redux-devtools-extension";
const logger = createLogger();



const sagaMiddleware = createSagaMiddleware();
const middlewares = [ sagaMiddleware ];
const enhancer = process.env.NODE_ENV === 'production'
? compose( applyMiddleware(...middlewares))
: composeWithDevTools(applyMiddleware(...middlewares))


//
const store = createStore(allReducers,enhancer)
store.sagaTask = sagaMiddleware.run(rootSaga);
export default store;



