import { combineReducers } from "redux";
import commonReducer from './reducer/commonReducer';
const allReducers = combineReducers({
    commonReducer
  });
  
  export default allReducers;