import "./App.css";
import { Route, Switch } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MainPage from "../MainPage/MainPage";
import CalendarPage from "../CalendarPage/CalendarPage";
import AboutProjectPage from "../AboutProjectPage/AboutProjectPage";
import ProfilePage from "../ProfilePage/ProfilePage";

function App() {
  return (
    <div className="App">
      <Header />
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
      <Footer />
    </div>
  );
}

export default App;
