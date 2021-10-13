import { List, X } from "phosphor-react";
import { useEffect, useState } from "react";
import styles from "../styles/SideBar.module.css";
import Link from "next/link";
import useAuth from "../hooks/useAuth";

const SideBar = () => {
  const [displaySideBar, setDisplaySideBar] = useState(false);
  const [isAthenticated, setIsAthenticated] = useState(false);
  const { user, login, logout } = useAuth();
  useEffect(() => {
    if (user) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      setIsAthenticated(true);
    }
  }, [user]);
  return (
    <div className={styles.sidebar}>
      {displaySideBar ? (
        <X size={28} color="#7c4ec4" onClick={() => setDisplaySideBar(false)} />
      ) : (
        <List
          size={28}
          color="#7c4ec4"
          onClick={() => setDisplaySideBar(true)}
        />
      )}
      <div
        style={{ marginRight: displaySideBar ? "0" : "-250px" }}
        className={styles.menu}
      >
        <ol>
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
            <li onClick={() => logout()}>Sign out</li>
          )}
        </ol>
      </div>
    </div>
  );
};

export default SideBar;
