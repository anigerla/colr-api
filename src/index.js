import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BoxContainer from '../src/container/BoxContainer';
//Redux imports
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers/index.js';

let store = createStore(reducers, applyMiddleware(thunk))

class App extends React.Component {
    render() {
        return(
            <BoxContainer />
        )
    }
}


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

