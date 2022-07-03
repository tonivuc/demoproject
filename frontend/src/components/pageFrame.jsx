import { useParams } from "react-router-dom";
import MainNav from "./mainNav";
import { Outlet } from "react-router-dom";

export default function PageFrame() {
  let params = useParams();
  return (
    <>
      <MainNav></MainNav>
      <Outlet />
    </>
    
  );
}
