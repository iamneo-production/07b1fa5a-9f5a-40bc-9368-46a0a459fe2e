import React from 'react';
import {BrowserRouter as Router,Navigate,Route,Routes} from 'react-router-dom';
import Home from './pages/home/index';
import { isAuthenticated } from './helper/Authentication';
import Admin from './pages/admin/index';
import Themes from './pages/admin/Themes/index';
import SignIn from './pages/signin/index';
import SignUp from './pages/signup/index';
import NotFound from './pages/notfound/index';
import ProtectedRoutes from './helper/ProtectedRoutes.js';



function App() {
  return (
      <Router>
          <Routes>
                <Route
                      exact
                      path="/"
                      element={ isAuthenticated() ?
                        <Navigate to="/home" /> :
                        <Navigate to="/signin" /> }
                    />
            <Route  element={<ProtectedRoutes/>}>
            <Route path="/home" exact element={<Home/>}></Route>
            <Route path="/admin" exact element={<Admin/>}></Route>
            </Route>
            <Route path="/admin/theme" exact element={<Themes/>}></Route>
            <Route path="/signup" exact element={<SignUp/>}></Route>
            <Route path="/signin" exact element={<SignIn/>}></Route>
            <Route path="*"  element={<NotFound/>}></Route>
          </Routes>
        </Router>

  );
}

export default App;
