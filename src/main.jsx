import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider
} from "react-router-dom";
import Home from './Home.jsx';
import User from './User.jsx';
import Me from './Me.jsx';
import Scan from './Scan.jsx';
import Login from './Login.jsx';
import Register from './Register.jsx';
import History from './History.jsx';

const router = createBrowserRouter([
  {
    path: "login",
    element: <Login></Login>
  },
  {
    path: "/home",
    element: <Home></Home>
  },
  {
    path: "user",
    element: <User></User>,
  },
  {
    path: "history/:username/:salt",
    element: <History></History>,
  },
  {
    path: "me",
    element: <Me></Me>
  },
  {
    path: "scan",
    element: <Scan></Scan>
  },
  {
    path: "register",
    element: <Register></Register>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
