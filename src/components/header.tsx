/* eslint-disable @next/next/link-passhref */
import React from "react";
import logo from "../assets/img/logo.svg";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Header.module.css";
import useAuth from "../hooks/useAuth";

const Header = () => {
  const { user, login, logout } = useAuth();
  // console.log("header==user", user);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <Image src={logo} alt="happ cow" />
        </Link>
      </div>
      <div className={styles.nav_bar}>
        <ul>
          {!user ? (
            <>
              <li>
                <Link href="/signup">Sign up</Link>
              </li>
              <li>
                <Link href="/login">Login</Link>
              </li>
            </>
          ) : (
            <li onClick={() => logout()}>Sign out</li>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Header;
