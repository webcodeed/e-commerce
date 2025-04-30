import { Outlet } from "react-router-dom"
import Header from "./Header"


function Content() {
  return (
    <>
    <Header/>
    <Outlet/>
    </>
    );
}

export default Content;