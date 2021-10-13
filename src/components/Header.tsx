/* eslint-disable @next/next/link-passhref */
import React, { useEffect, useState } from "react";
import logo from "../assets/img/logo.svg";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Header.module.css";
import useAuth from "../hooks/useAuth";
import SideBar from "./SideBar";
import { useRouter } from "next/router";

const Header = () => {
  const { user, login, logout } = useAuth();
  const [isAthenticated, setIsAthenticated] = useState(false);
  console.log("isAthenticated", isAthenticated);
  console.log(user);
  const router = useRouter();

  useEffect(() => {
    if (user) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      setIsAthenticated(true);
    }
  }, [user]);

  const handleClick = () => {
    logout();
    router.push("/");
  };

  return (
    <header suppressHydrationWarning className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <div>
            <Image src={logo} alt="happ cow" />
          </div>
        </Link>
      </div>
      <div className={styles.nav_bar}>
        <SideBar />
        <ul>
          {!isAthenticated ? (
            <>
              <li>
                <Link href="/signup">Sign up</Link>
              </li>
              <li>
                <Link href="/login">Login</Link>
              </li>
            </>
          ) : (
            <li onClick={handleClick}>Sign out</li>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Header;
