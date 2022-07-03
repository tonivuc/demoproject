import MainNav from "./mainNav";
import { Outlet } from "react-router-dom";
import EstartaFooter from "./estartaFooter";

const PageFrame = () => {
  return (
    <>
      <MainNav></MainNav>
      <Outlet />
      <EstartaFooter />
    </>
  );
};

export default PageFrame;
