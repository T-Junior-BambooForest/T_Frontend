import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { legacy_createStore as createStore } from 'redux'
import reducer from './modules'
import { Provider } from 'react-redux'
import { QueryCache, QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const store = createStore(reducer)

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			retry: 0,
			suspense: false,
		},
	},
	queryCache: new QueryCache({
		onError: (err) => {
			console.log(err)
		},
	}),
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<QueryClientProvider client={queryClient}>
		<ReactQueryDevtools initialIsOpen={true} />
		<Provider store={store}>
			<App />
		</Provider>
	</QueryClientProvider>
)
