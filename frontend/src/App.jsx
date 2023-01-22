import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { loadUser } from './actions/userActions';
import './App.css'
import AuthPage from './Components/AuthPage/Page/AuthPage';
import store from './store';
import { useSelector } from 'react-redux';
import ChatPage from './Components/ChatPage/Page/ChatPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loader from "./Components/Loader/Loader";

function App() {
  React.useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  const { isAuthenticated, loading, user } = useSelector(state => state.user);
  return (
    <GoogleOAuthProvider clientId='72021732566-2bjhjhedb135sjldaju1tr159473ojth.apps.googleusercontent.com'>
      <BrowserRouter>
        {loading ? <Loader /> : <Routes>
          <Route exact path="/" element={isAuthenticated ? <ChatPage /> : <AuthPage />} />
        </Routes>}
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;
