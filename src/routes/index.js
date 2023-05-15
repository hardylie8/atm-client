import React from "react";
import Login from "./../Pages/Login/index";
import PrivateRoute from "./PrivateRoute";

import { Route, Routes } from "react-router-dom";

import MainHistory from "./../Pages/History/MainHistory";
import MainMenu from "./../Pages/MainMenu/MainMenu";

import Transfer from "./../Pages/Transfer/mainTransfer";
import Withdraw from "./../Pages/Withdraw/Withdraw";
import TopUp from "./../Pages/TopUp/TopUp";

const RoutesList = () => (
  <div>
    <Routes>
      <Route exact path="/login" element={<Login />}></Route>
      <Route
        path="/transfer"
        element={
          <PrivateRoute>
            <Transfer />
          </PrivateRoute>
        }
      />

      <Route
        index
        path="/home"
        element={
          <PrivateRoute>
            <MainMenu />
          </PrivateRoute>
        }
      />
      <Route
        path="/withdraw"
        element={
          <PrivateRoute>
            <Withdraw />
          </PrivateRoute>
        }
      />
      <Route
        path="/topup"
        element={
          <PrivateRoute>
            <TopUp />
          </PrivateRoute>
        }
      />
      <Route
        path="/history"
        element={
          <PrivateRoute>
            <MainHistory />
          </PrivateRoute>
        }
      />

      <Route path="*" element={<TopUp />}></Route>
    </Routes>
  </div>
);

export default RoutesList;
