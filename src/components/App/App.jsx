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
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import AboutProjectPage from "../AboutProjectPage/AboutProjectPage";
import ErrorSignPopup from "../Popup/ErrorSignPopup";

function App() {
  const [isCitiesPopupOpen, setCitiesPopupOpen] = useState(false);
  const [isAuthPopupOpen, setIsAuthPopupOpen] = useState(false);
  const [isEventPopupOpen, setIsEventPopupOpen] = useState(false);
  const [isSignPopupOpen, setIsSignPopupOpen] = useState(false);
  const [isSuccessPopupOpen, setIsSuccessPopupOpen] = useState(false);
  const [isErrorPopupOpen, setIsErrorPopupOpen] = useState(false);
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState({
    id: 6,
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
    setIsErrorPopupOpen(false);
  };

  const openAuthPopup = () => {
    setIsAuthPopupOpen(true);
  };

  const handleOpenCItiesPopup = () => {
    setCitiesPopupOpen(true);
  };

  const handleProfileIconClick = () => {
    setIsAuthPopupOpen(true);
  };

  const handleSubmitSign = (event) => {
    const token = localStorage.getItem("access");
    api
      .bookEvent(event.id, token)
      .then(() => {
        const newEvents = events.map((item) => {
          if (event.id === item.id) {
            // eslint-disable-next-line no-param-reassign
            item.booked = !event.booked;
            setSelectedEvent(item);
            return item;
          }
          return item;
        });

        setEvents(newEvents);
        closeAllPopups();
        if (selectedEvent.booked) {
          setIsSuccessPopupOpen(true);
        }
      })
      .catch(() => setIsErrorPopupOpen(true));
  };

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
    setIsEventPopupOpen(true);
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

  // загружаем данные для календаря
  useEffect(() => {
    const token = localStorage.getItem("access");
    api
      .getEvents(currentUser.city, token)
      .then((data) => {
        setEvents(data);
      })
      .catch(new Error());
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
              events={events}
            />
          </Route>
          <Route path="/calendar">
            <ProtectedRoute
              component={CalendarPage}
              onZoomEvent={handleEventCardClick}
              onSign={handleSignEvent}
              openAuthPopup={openAuthPopup}
              events={events}
            />
          </Route>
          <Route path="/profile">
            <Profile
              onSignOut={handleSignOut}
              openPopup={handleOpenCItiesPopup}
            />
          </Route>
          <Route path="/about-project">
            <AboutProjectPage />
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
        <ErrorSignPopup
          isPopupOpen={isErrorPopupOpen}
          closePopup={closeAllPopups}
          styleCon="popup__error-container"
        />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
