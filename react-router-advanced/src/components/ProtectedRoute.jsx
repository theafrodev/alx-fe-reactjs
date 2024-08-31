// import React from 'react';
// import { Route, Navigate } from 'react-router-dom';
// import { useAuth } from '../AuthContext';

// const ProtectedRoute = ({ element, ...rest }) => {
//   const { isAuthenticated } = useAuth();

//   return (
//     <Route
//       {...rest}
//       element={isAuthenticated ? element : <Navigate to="/" />}
//     />
//   );
// };

// export default ProtectedRoute;


import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
