import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LayoutRoot from 'components/LayoutRoot';
import User from 'components/User';
import LoginPage from 'components/LoginPage';
import ResetAccount from 'components/ResetAccount';
import RegisterPage from 'components/RegisterPage';



const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutRoot />,
    children: [
      {
        index: true,
        element: <App />
      },
      {
        path: "user/create",
        element: <User />
      },
      {
        path: "edit/:userID",
        element: <User />
      },

    ]
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "reset-account",
    element: <ResetAccount />
  },
  {
    path: "register",
    element: <RegisterPage />
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
