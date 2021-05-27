import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function ProtectedRoute({ component: Component, onSign, onZoomEvent }) {
  const { isLoggedIn } = React.useContext(CurrentUserContext);
  return (
    <Route>
      {isLoggedIn ? (
        <Component onSign={onSign} onZoomEvent={onZoomEvent} />
      ) : (
        <Redirect to="/" />
      )}
    </Route>
  );
}

ProtectedRoute.propTypes = {
  component: PropTypes.element.isRequired,
  onSign: PropTypes.func.isRequired,
  onZoomEvent: PropTypes.func.isRequired,
};

export default ProtectedRoute;
