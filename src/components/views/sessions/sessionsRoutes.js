import ForgotPassword from "./ForgotPassword";
import Login from "./Login";
import Register from "./Register";
import NotFound from "./NotFound";

const sessionRoutes = [
  {
    path: "/session/signup",
    component: Register,
  },
  {
    path: "/session/signin",
    component: Login,
  },
  {
    path: "/session/forgot-password",
    component: ForgotPassword,
  },
  {
    path: "/session/404",
    component: NotFound,
  },
];

export default sessionRoutes;
