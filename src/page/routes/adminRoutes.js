import Admin from "../Admin";

const adminRoutes = [
  {
    path: "/admin",
    component: Admin,
    exact: true,
    role: "admin",
    backUrl: "/backend",
  },
];

export default adminRoutes;
