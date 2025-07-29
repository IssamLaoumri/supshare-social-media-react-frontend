import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Login from '@/views/authentication/login'
import ProviderWrapper from "@/store/ProviderWrapper.jsx";

function App() {

  return (
      <ProviderWrapper>
        <Router>
            <Routes>
                <Route path="/auth" element={<Login />} />
            </Routes>
        </Router>
      </ProviderWrapper>
  )
}

export default App
