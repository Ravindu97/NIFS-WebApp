import React, { useEffect } from 'react';
import Navbar from './components/shared/Navbar';
import Login from './pages/Login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import TransportMainPage from './pages/TransportMainPage';
import CommonMainPage from './pages/CommonMainPage';
import AccountMainPage from './pages/AccountMainPage';
import AdminMainPage from './pages/AdminMainPage';
import LibraryMainPage from './pages/LibraryMainPage';
import ProcumentMainPage from './pages/ProcumentMainPage';
import SeduMainPage from './pages/SeduMainPage';
import UserPermissionMainPage from './pages/UserPermissionMainPage';
import NotificationMainPage from './pages/NotificationMainPage';
import HelpMainPage from './pages/HelpMainPage';

function App() {

  const user = {
    "id": 0,
    "value": "Mr. Kamal",
    "admin": true,
    "deparment": "Transpoort"
  }


  return (
    <Router>
      <Navbar />
      <Routes>

        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/common/*" element={<CommonMainPage />} />
        <Route path="/account/*" element={<AccountMainPage />} />
        <Route path="/admin/*" element={<AdminMainPage />} />
        <Route path="/library/*" element={<LibraryMainPage />} />
        <Route path="/procument/*" element={<ProcumentMainPage />} />
        <Route path="/sedu/*" element={<SeduMainPage />} />
        <Route path="/transport/*" element={<TransportMainPage />} />
        <Route
          path="/user-permission/*"
          element={<UserPermissionMainPage />}
        />
        <Route
          path="/notification/*"
          element={<NotificationMainPage />}
        />
        <Route path="/help/*" element={<HelpMainPage />} />
      </Routes>


    </Router>
  );
}

export default App;
