import React, { useState } from 'react';
import Login from './Components/Login';
import Homepage from './Components/Homepage';

function EventLogin() {
  const user = {
    idUser: 'yuyu5850',
    pwUser: '1234'
  };

  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (id, pw) => {
    if (id === user.idUser && pw === user.pwUser) {
      setLoggedIn(true);
    }
  };

  return (
    <div>
        { loggedIn ? <Homepage></Homepage> : <Login></Login> }
    </div>
  );
}

export default EventLogin;