import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createHashRouter,
  RouterProvider
} from "react-router-dom";
import Home from './Home.jsx';
import User from './User.jsx';
import Me from './Me.jsx';
import Scan from './Scan.jsx';

const router = createHashRouter([
  {
    path: "/",
    element: <Home></Home>
  },
  {
    path: "user",
    element: <User></User>,
  },
  {
    path: "me",
    element: <Me></Me>
  },
  {
    path: "scan",
    element: <Scan></Scan>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
