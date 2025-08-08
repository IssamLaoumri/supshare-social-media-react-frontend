import './App.css'
import {lazy} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import ProviderWrapper from "@/store/ProviderWrapper.jsx";

// project imports
import Loadable from '@/components/ui-components/Loadable';

// maintenance routing
const LoginPage = Loadable(lazy(() => import('@/views/authentication/login')));
const ProfilePage = Loadable(lazy(() => import('@/views/main/profile.jsx')));

function App() {

  return (
      <ProviderWrapper>
        <Router>
            <Routes>
                <Route path="/auth" element={<LoginPage />} />
                <Route path="/profile" element={<ProfilePage />} />
            </Routes>
        </Router>
      </ProviderWrapper>
  )
}

export default App
