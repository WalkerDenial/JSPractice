import Login from "../Login";
import Home from "../Home";

const publicRoutes = [
  {
    path: "/login",
    component: Login,
    exact: true,
  },
  {
    path: "/",
    component: Home,
    exact: true,
  },
];

export default publicRoutes;
