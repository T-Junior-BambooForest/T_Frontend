import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { legacy_createStore as createStore } from 'redux'
import reducer from './modules'
import { Provider } from 'react-redux'

const store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<Provider store={store}>
		<App />
	</Provider>
)
