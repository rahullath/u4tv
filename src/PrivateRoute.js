import React from 'react';
import { Route, Navigate } from 'react-router-dom';

function PrivateRoute({ isAuthenticated, ...props }) {
  return (
    <Route
      {...props}
      render={({ location }) =>
        isAuthenticated ? (
          props.children // Render the passed component
        ) : (
          <Navigate
            to="/login"
            state={{ from: location }}
            replace={true}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
