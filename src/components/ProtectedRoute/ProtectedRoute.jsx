import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function ProtectedRoute({
  component: Component,
  onSign,
  onZoomEvent,
  onAutoAuth,
}) {
  const { isLoggedIn } = React.useContext(CurrentUserContext);
  function protect() {
    onAutoAuth();
    return <Redirect to="/" />;
  }

  return (
    <Route>
      {isLoggedIn ? (
        <Component onSign={onSign} onZoomEvent={onZoomEvent} />
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
  onAutoAuth: PropTypes.func.isRequired,
};

export default ProtectedRoute;
