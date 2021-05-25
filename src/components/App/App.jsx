import "./App.css";
import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MainPage from "../MainPage/MainPage";
import CalendarPage from "../CalendarPage/CalendarPage";
import Profile from "../Profile/Profile";
import Mesto from "../Mesto/Mesto";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import api from "../../utils/api/api";
import CitiesPopup from "../CitiesPopup/CitiesPopup";
import AuthPopup from "../Popup/AuthPopup";
import EventPopup from "../Popup/EventPopup";

function App() {
  const [isCitiesPopupOpen, setCitiesPopupOpen] = useState(false);
  const [isAuthPopupOpen, setIsAuthPopupOpen] = useState(false);
  const [isEventPopupOpen, setIsEventPopupOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [currentUser, setCurrentUser] = useState({
    name: "",
    city: "",
    isLoggedIn: false,
  });

  const handleProfileIconClick = () => {
    setIsAuthPopupOpen(true);
  };

  const handleEventCardClick = (event) => {
    setIsEventPopupOpen(true);
    setSelectedEvent(event);
  };

  const closeAllPopups = () => {
    setCitiesPopupOpen(false);
    setIsAuthPopupOpen(false);
    setIsEventPopupOpen(false);
  };

  const saveToLocalStorage = (name, value) => localStorage.setItem(name, value);

  const handleLogin = ({ username, password }) => {
    api.authorize(username, password).then(({ refresh, access }) => {
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
      <div className="App">
        <Header onProfileIconClick={handleProfileIconClick} />
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route path="/calendar">
            <CalendarPage onZoomEvent={handleEventCardClick} />
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
          isPopupOpen={isAuthPopupOpen}
          closePopup={closeAllPopups}
          onLogin={handleLogin}
        />
        <EventPopup
          event={selectedEvent}
          isPopupOpen={isEventPopupOpen}
          closePopup={closeAllPopups}
        />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
