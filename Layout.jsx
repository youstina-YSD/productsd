import {Outlet} from "react-router-dom"
import Nav from "./assets/components/Nav"
function Layout() {
  return (
    <>
    <Nav />
    <Outlet />
    </>
  )
}

export default Layout