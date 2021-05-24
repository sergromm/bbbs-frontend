import "./App.css";
import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MainPage from "../MainPage/MainPage";
import CalendarPage from "../CalendarPage/CalendarPage";
import AboutProjectPage from "../AboutProjectPage/AboutProjectPage";
import ProfilePage from "../ProfilePage/ProfilePage";
import SignContext from "../../contexts/SignContext";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import api from "../../utils/api/api";
import AuthPopup from "../Popup/AuthPopup";
import EventPopup from "../Popup/EventPopup";

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
    <CurrentUserContext.Provider value={currentUser}>
      <SignContext.Provider value={isLoggedIn}>
        <div className="App">
          <Header onProfileIconClick={handleProfileIconClick} />
          <Switch>
            <Route exact path="/">
              <MainPage />
            </Route>
            <Route path="/calendar">
              <CalendarPage />
            </Route>
            <Route>
              <AboutProjectPage path="/about-project" />
            </Route>
            <Route>
              <ProfilePage path="/profile" />
            </Route>
          </Switch>
          <AuthPopup
            isPopupOpen={isPopupOpen}
            closePopup={closeAllPopups}
            onLogin={handleLogin}
          />
          <EventPopup isPopupOpen={isPopupOpen} closePopup={closeAllPopups} />
          <Footer />
        </div>
      </SignContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
