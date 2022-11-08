import React, {  useState } from "react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Local from './helpers/Local';
import Api from './helpers/Api';

import Navbar from './components/Navbar';
import Home from "./pages/Home";
import RecipeList from "./pages/RecipeList";
import Error404 from "./pages/Error404";
import Favourites from "./pages/Favourites";
import AddCocktailForm from "./pages/AddCocktailForm";
import RecipeProfile from "./pages/RecipeProfile";
import PrivateRoute from './components/PrivateRoute';
import LoginView from './pages/LoginView';
import ProfileView from './pages/ProfileView';


function App() {

  //log in function
  const [user, setUser] = useState(Local.getUser());
  const [loginErrorMsg, setLoginErrorMsg] = useState('');
  const navigate = useNavigate();

  async function doLogin(username, password) {
      let myresponse = await Api.loginUser(username, password);
      if (myresponse.ok) {
          Local.saveUserInfo(myresponse.data.token, myresponse.data.user);
          setUser(myresponse.data.user);
          setLoginErrorMsg('');
          navigate('/');
      } else {
          setLoginErrorMsg('Login failed');
      }
  }

  function doLogout() {
      Local.removeUserInfo();
      setUser(null);
      // (NavBar will send user to home page)
  }


  return (
    <div className="App">
      <Navbar user={user} logoutCb={doLogout}/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<RecipeList user={user}/>} />
        <Route path="/recipes/:id" element={<RecipeProfile />} />

      

        <Route path="/login" element={
                        <LoginView 
                            loginCb={(u, p) => doLogin(u, p)} 
                            loginError={loginErrorMsg} 
                        />
                    } />

<Route path="/users/:userId" element={
                        <PrivateRoute>
                            <ProfileView />
                        </PrivateRoute>
                    } />

<Route path="/favourites" element={
          <Favourites />
       } />

        <Route path="/add-cocktail" element={<AddCocktailForm />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
