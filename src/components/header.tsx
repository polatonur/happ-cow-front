/* eslint-disable @next/next/link-passhref */
import React from "react";
import logo from "../assets/img/logo.svg";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <Image src={logo} alt="happ cow" />
        </Link>
      </div>
      <div className={styles.nav_bar}>
        <ul>
          <li>
            <Link href="/signup">Sign up</Link>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>Sign out</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
