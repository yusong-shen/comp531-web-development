/*
	High level logic for entire front-end applicaiton
*/
require('expose?$!expose?jQuery!jquery')
// require("bootstrap-webpack")
require('./styles.css')

import React from 'react'
import { render } from 'react-dom'

import App from './components/app'

render(
    <App />,
    document.getElementById('app')
)
