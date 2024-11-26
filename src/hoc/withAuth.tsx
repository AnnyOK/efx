import React from 'react';
// import { Redirect } from 'react-router-dom'; // Import Redirect from 'react-router-dom'
import { parseCookies } from './cookieUtils';
import { useNavigate } from 'react-router-dom';
type AuthProps = {
    user: any;
    authToken: string;
  };
const withAuth=(WrappedComponent: React.ComponentType<AuthProps>) => {
  const AuthenticatedComponent = ({ ...props }) => {
    const navigate = useNavigate()
    const cookies = parseCookies();
    const authToken = cookies.authToken;

    if (!authToken) {
      // Redirect to login page if no auth token is found
      return navigate("/login");
    }

    // Retrieve user details from cookies
    const user = cookies.user;

    // Return the wrapped component with user details and auth token as props
    return <WrappedComponent user={user} authToken={authToken} {...props} />;
  };

  return AuthenticatedComponent;
};

export default withAuth;