import MainNav from "./mainNav";
import { Outlet } from "react-router-dom";

const PageFrame = () => {
  return (
    <>
      <MainNav></MainNav>
      <Outlet />
    </>
  );
};

export default PageFrame;
