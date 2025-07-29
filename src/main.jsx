import { createRoot } from 'react-dom/client'
import '@/assets/fonts/fonts.css'
import '@/assets/scss/style.scss';


import App from './App.jsx'
import {ConfigProvider} from "@/contexts/ConfigContext.jsx";


createRoot(document.getElementById('root')).render(
  <ConfigProvider>
    <App />
  </ConfigProvider>,
)
