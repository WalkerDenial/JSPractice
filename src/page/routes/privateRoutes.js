import Backend from "../Backend";

const privateRoutes = [
  {
    path: "/backend",
    component: Backend,
    extact: true,
    role: "user",
    backUrl: "/login",
  },
];

export default privateRoutes;
