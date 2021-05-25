import "./App.css";
import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MainPage from "../MainPage/MainPage";
import CalendarPage from "../CalendarPage/CalendarPage";
import SignContext from "../../contexts/SignContext";
import Profile from "../Profile/Profile";
import Mesto from "../Mesto/Mesto";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import api from "../../utils/api/api";
import CitiesPopup from "../CitiesPopup/CitiesPopup";
import AuthPopup from "../Popups/AuthPopup";
import EventPopup from "../Popups/EventPopup";

function App() {
  const [isLoggedIn, setLoggedIn] = React.useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isCitiesPopupOpen, setCitiesPopupOpen] = useState(false);

  const [currentUser, setCurrentUser] = useState({
    name: "",
    city: "",
    isLoggedIn,
  });

  const handleOpenCitiesPopup = () => {
    setCitiesPopupOpen(true);
  };

  const handleOpenPopup = () => {
    setPopupOpen(true);
  };

  const closeAllPopups = () => {
    setPopupOpen(false);
    setCitiesPopupOpen(false);
  };

  const saveToLocalStorage = (name, value) => localStorage.setItem(name, value);

  const handleLogin = ({ username, password }) => {
    api.authorize(username, password).then(({ refresh, access }) => {
      setLoggedIn(true);
      saveToLocalStorage("refresh", refresh);
      saveToLocalStorage("access", access);
      setCurrentUser({
        isLoggedIn: true,
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
          setLoggedIn(true);
        })
        .catch(new Error());
    } else {
      setCitiesPopupOpen(true);
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
          <Header
            onProfileIconClick={{
              handlers: { handleOpenPopup, handleOpenCitiesPopup },
            }}
          />
          <Switch>
            <Route exact path="/">
              <MainPage />
            </Route>
            <Route path="/calendar">
              <CalendarPage />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/mesto">
              <Mesto />
            </Route>
          </Switch>
          <CitiesPopup
            isPopupOpen={isCitiesPopupOpen}
            closePopup={closeAllPopups}
          />
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
