import AppNav from "./AppNav";
import styles from "./sidebar.module.css";
import Logo from "./Logo";
import AppFooter from "./AppFooter";
import { Outlet } from "react-router-dom";

function SideBar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <Outlet />
      <AppFooter />
    </div>
  );
}

export default SideBar;
