import styles from "../styles/Login.module.css";
import React from "react";
import Layout from "../components/Layout";
import Image from "next/image";
import login from "../assets/img/login.jpg";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/signup");
  };
  return (
    <Layout>
      <div className={styles.login}>
        <main>
          <div className={styles.col_1}>
            <Image src={login} alt="login" />
          </div>
          <div className={styles.col_2}>
            <form>
              <h4>Login to Your Account</h4>
              <label>Username</label>
              <input placeholder="Username" type="text" />
              <label>Password</label>
              <input placeholder="Password" type="text" />
              <button type="submit">Login</button>
            </form>
            <div className={styles.bottom}>
              <p>OR</p>
              <button onClick={handleClick}>Register</button>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default Login;
