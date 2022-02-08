import './App.css';
import Counter from './Counter';
// import { Provider } from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import reducer from './reducer';
import rootSagas from './saga';
const sagaMiddleware = createSagaMiddleware();
//for Debugging redux
const withDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPONSE__ || compose

export const store = createStore(reducer, withDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSagas);

const action = type => {
  console.log('action ',type,' store :',store.getState());
  return store.dispatch({type})
};

function App() {
  return (
      <div className="App">
        <Counter 
          onIncrement={() => action('INCREMENT')} 
          onDecrement={() => action('DECREMENT')} 
          onIncrementAsync={() => action('INCREMENT_ASYNC')}/>
      </div>
  );
}

export default App;
