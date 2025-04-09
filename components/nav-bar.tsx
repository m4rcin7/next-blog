"use client";
import Link from "next/link";
import logo from "@/images/elephant_1841047.png";
import Image from "next/image";
import { useAppContext } from "@/app/provider";
import styles from "./nav-bar.module.css";

const NavBar = () => {
  const { isLogIn, onLogout } = useAppContext();
  const handleLogOut = () => (isLogIn ? onLogout() : null);

  return (
    <nav className={styles.nav}>
      <div>
        <Link href="/home">
          <Image className={styles["nav-logo"]} src={logo} alt="side logo" />
        </Link>
      </div>
      <ul>
        <li>
          <Link href="/home">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        {isLogIn ? (
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
        ) : (
          <></>
        )}
      </ul>
      <Link href={isLogIn ? "/" : "/login"}>
        <button onClick={handleLogOut} className={styles["btn-log-in"]}>
          {isLogIn ? "Log Out" : "Log In"}
        </button>
      </Link>
    </nav>
  );
};

export default NavBar;
