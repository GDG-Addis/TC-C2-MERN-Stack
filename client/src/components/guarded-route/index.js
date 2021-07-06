import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const GuardedRoute = ({ children, ...rest }) => {
  const { token } = useSelector((state) => state.user);
  if (!token) {
    return <Redirect to="/login" />;
  }

  return <Route {...rest}>{children}</Route>;
};

export default GuardedRoute;
