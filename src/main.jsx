import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import Store from './Redux/Store/Store'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Store}>
    <div className='flex justify-center items-center h-screen'>
    <App></App>
    </div>
    </Provider>
  </React.StrictMode>,
)
