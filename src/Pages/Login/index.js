import React, { useState, useEffect } from "react";
// import { Redirect } from "react-router-dom";
import { getToken } from "../../utils/HelperFunctions";

import { login } from "../../store/slices/authThunk";
import { useSelector, useDispatch } from "react-redux";
import history from "../../utils/history";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { token, loading } = useSelector((state) => state.auth);

  if (token || getToken()) {
    history.push("/home");
  }

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login({ id, password }));
  };

  return (
    <div className="page">
      <div>
        <h2>Login</h2>
      </div>

      <form onSubmit={handleLogin}>
        <input
          onChange={(e) => setId(e.target.value)}
          placeholder="Id"
          type="text"
          value={id}
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
          value={password}
        />

        {loading ? (
          <div className="loading">
            <span>Loading...</span>
          </div>
        ) : (
          <input type="submit" name="Login"></input>
        )}
      </form>
    </div>
  );
};

export default Login;
