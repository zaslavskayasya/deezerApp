import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import GoogleMapReact from 'google-map-react';
import SimpleMap from './app/components/Map';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import reducers from './app/reducers';
import Places from './app/components/Places'


let store = createStore(reducers, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
        <div>
    <div style={{width: '60%', height: '800px', display: 'inline-block', position:'fixed', right:'0px'}}>
        <SimpleMap />
    </div>
        <Places/>
            </div>
    </Provider>,
    document.getElementById('root')
);

