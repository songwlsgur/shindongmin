import logo from './logo.svg';
import './App.css';
import React, {Fragment} from 'react';
import { Provider } from 'react-redux';
import store from './store/store'
import Main from './component/Main';
import './css/style.css'
function App() {
  return (
    <Fragment>
      {
        <Provider store ={store}>
            <Main></Main>
        </Provider>
        
      }
    </Fragment>
  );
}

export default App;
