import WelcomePage from "pages/WelcomePage/WelcomePage";
import HomePage from "pages/HomePage/HomePage";
import AuthPage from "pages/AuthPage/AuthPage";

import { Route, Routes } from "react-router-dom";

import LoginForm from "./LoginForm/LoginForm";
import RegisterForm from "./RegisterForm/RegisterForm";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import RestrictedRoute from "./RestrictedRoute/RestrictedRoute";
import Layout from "./Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { selectIsRefreshing } from "redux/auth/authSelectors";
import { useEffect } from "react";
import { refreshCurrentUser } from "redux/auth/authOperations";
import Loader from "./Loader/Loader";
import RestrictedAuthRoute from "./RestrictedAuthRoute/RestrictedAuthRoute";

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshCurrentUser());
  }, [dispatch]);

  return (
    <>
      {isRefreshing ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <RestrictedRoute
                  redirectTo="/home"
                  component={<WelcomePage />}
                />
              }
            />

            <Route
              path="/home"
              element={<PrivateRoute redirectTo="/" component={<HomePage />} />}
            >
            </Route>

            <Route
              path="auth/:id"
              element={
                <RestrictedAuthRoute redirectTo="/home" component={<AuthPage />} />
              }
            >
              <Route path="login" element={<LoginForm />} />
              <Route path="register" element={<RegisterForm />} />
            </Route>
          </Route>
        </Routes>
      )}
    </>
  );
};
