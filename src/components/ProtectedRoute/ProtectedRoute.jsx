import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function ProtectedRoute({
  component: Component,
  onSign,
  onZoomEvent,
  openAuthPopup,
  events,
}) {
  const { isLoggedIn } = React.useContext(CurrentUserContext);
  function protect() {
    openAuthPopup();
    return <Redirect to="/" />;
  }

  return (
    <Route>
      {isLoggedIn ? (
        <Component onSign={onSign} onZoomEvent={onZoomEvent} events={events} />
      ) : (
        protect()
      )}
    </Route>
  );
}

ProtectedRoute.propTypes = {
  component: PropTypes.element.isRequired,
  onSign: PropTypes.func.isRequired,
  onZoomEvent: PropTypes.func.isRequired,
  openAuthPopup: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  events: PropTypes.array.isRequired,
};

export default ProtectedRoute;
