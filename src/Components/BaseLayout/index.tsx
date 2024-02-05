import {FC, useLayoutEffect} from "react";
import {Outlet, useLocation} from "react-router-dom";

const BaseLayout: FC = () => {
  const location = useLocation();

  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);

  return (
      <Outlet/>
  )
}

export default BaseLayout;
