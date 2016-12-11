/*
	High level logic for entire front-end applicaiton
*/
require('expose?$!expose?jQuery!jquery')
require("bootstrap-webpack")
require('./styles.css')

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import createLogger from 'redux-logger'
import { createStore, compose, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'

import App from './components/app'
import rootReducer from './reducers/reducers'

const logger = createLogger()
const store = createStore(rootReducer,
    compose(
        // applyMiddleware(logger),
        applyMiddleware(reduxThunk)
    ))

class MyComponent extends React.Component {
    render() {
        return <Provider store={store}>
            <App />
        </Provider>
    }
}

ReactDOM.render(<MyComponent />,
	document.getElementById('app')
)
