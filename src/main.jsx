import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './Redux/store.js'
import "react-toastify/dist/ReactToastify.css";
import { PayPalScriptProvider } from '@paypal/react-paypal-js'


createRoot(document.getElementById('root')).render(

       
    <Provider store={store}>

    <App />

    </Provider>
    

)
