import "./App.css";
import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MainPage from "../MainPage/MainPage";
import CalendarPage from "../CalendarPage/CalendarPage";
import AboutProjectPage from "../AboutProjectPage/AboutProjectPage";
import SignContext from "../../contexts/SignContext";
import Profile from "../Profile/Profile";
import Mesto from "../Mesto/Mesto";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import Popup from "../Popup/Popup";
import AuthForm from "../AuthForm/AuthForm";
import api from "../../utils/api/api";

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    name: "",
    city: "",
    isLoggedIn,
  });

  const handleProfileIconClick = () => {
    setIsPopupOpen(true);
  };

  const closeAllPopups = () => {
    setIsPopupOpen(false);
  };

  const saveToLocalStorage = (name, value) => localStorage.setItem(name, value);

  const handleLogin = ({ username, password }) => {
    api.authorize(username, password).then(({ refresh, access }) => {
      setIsLoggedIn(true);
      saveToLocalStorage("refresh", refresh);
      saveToLocalStorage("access", access);
      setCurrentUser({
        isLoggedIn,
      });
      closeAllPopups();
    });
  };

  useEffect(() => {
    const token = localStorage.getItem("access");
    if (token) {
      api
        .getProfile()
        .then((res) => {
          setCurrentUser({
            name: res.user,
            city: res.city,
            isLoggedIn: true,
          });
          setIsLoggedIn(true);
        })
        .catch(new Error());
    }
  }, []);

  // const removeFromLocalStorage = (name) => localStorage.removeItem(name);

  // function handleSignOut() {
  //   setIsLoggedIn(false);
  //   removeFromLocalStorage("refresh");
  //   removeFromLocalStorage("access");
  // }

  // const history = useHistory();

  return (
    <SignContext.Provider value={isLoggedIn}>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/calendar">
            <CalendarPage />
          </Route>
          <Route path="/mesto">
            <Mesto />
          </Route>
          <Route>
            <AboutProjectPage path="/about-project" />
          </Route>
        </Switch>
        <Footer />
      </div>
    </SignContext.Provider>
  );
}

export default App;
