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
import CitiesPopup from "../Popup/CitiesPopup/CitiesPopup";
import AuthPopup from "../Popup/AuthPopup";
import EventPopup from "../Popup/EventPopup";
import SubmitSignPopup from "../Popup/SubmitSignPopup";
import SuccessSignPopup from "../Popup/SuccessSignPopup";

function App() {
  const [isCitiesPopupOpen, setCitiesPopupOpen] = useState(false);
  const [isAuthPopupOpen, setIsAuthPopupOpen] = useState(false);
  const [isEventPopupOpen, setIsEventPopupOpen] = useState(false);
  const [isSignPopupOpen, setIsSignPopupOpen] = useState(false);
  const [isSuccessPopupOpen, setIsSuccessPopupOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState({
    id: 1,
    booked: false,
    address: "",
    contact: "",
    title: "",
    description: "",
    startAt: "2021-05-10T06:00:00Z",
    endAt: "2021-05-10T08:00:00Z",
    seats: 100,
    takenSeats: 0,
    city: 1,
  });
  const [currentUser, setCurrentUser] = useState({
    name: "",
    city: "",
    isLoggedIn: false,
  });

  const closeAllPopups = () => {
    setCitiesPopupOpen(false);
    setIsAuthPopupOpen(false);
    setIsEventPopupOpen(false);
    setIsSignPopupOpen(false);
    setIsSuccessPopupOpen(false);
  };

  const handleOpenCItiesPopup = () => {
    setCitiesPopupOpen(true);
  };

  const handleProfileIconClick = () => {
    setIsAuthPopupOpen(true);
  };

  const handleSubmitSign = () => {
    const token = localStorage.getItem("access");
    api.bookEvent(selectedEvent.id, token).then(() => {
      selectedEvent.booked = !selectedEvent.booked;
      closeAllPopups();
      if (selectedEvent.booked) {
        setIsSuccessPopupOpen(true);
      }
    });
  };

  useEffect(() => {});

  const handleSignEvent = (event) => {
    setSelectedEvent(event);
    if (!event.booked) {
      setIsSignPopupOpen(true);
    } else {
      handleSubmitSign(event);
    }
  };

  const handleEventCardClick = (event) => {
    setSelectedEvent(event);
    // console.log(selectedEvent);
    setIsEventPopupOpen(true);
    // console.log(isEventPopupOpen);
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

  const removeFromLocalStorage = (name) => localStorage.removeItem(name);

  function handleSignOut() {
    setCurrentUser({ isLoggedIn: false });
    removeFromLocalStorage("refresh");
    removeFromLocalStorage("access");
  }

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
    } else if (currentUser.city === null) {
      setCitiesPopupOpen(true);
    }
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Header onProfileIconClick={handleProfileIconClick} />
        <Switch>
          <Route exact path="/">
            <MainPage
              onSign={handleSubmitSign}
              onZoomEvent={handleEventCardClick}
            />
          </Route>
          <Route path="/calendar">
            <CalendarPage
              isEventPopupOpen={isEventPopupOpen}
              onZoomEvent={handleEventCardClick}
              onSign={handleSignEvent}
              setSelectedEvent={setSelectedEvent}
            />
          </Route>
          <Route path="/profile">
            <Profile
              onSignOut={handleSignOut}
              openPopup={handleOpenCItiesPopup}
            />
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
          onSubmitSign={handleSubmitSign}
        />
        <SubmitSignPopup
          isPopupOpen={isSignPopupOpen}
          closePopup={closeAllPopups}
          event={selectedEvent}
          onSubmitSign={handleSubmitSign}
        />
        <SuccessSignPopup
          isPopupOpen={isSuccessPopupOpen}
          closePopup={closeAllPopups}
          event={selectedEvent}
        />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
