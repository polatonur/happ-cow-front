import React from "react";
import styles from "../styles/Signup.module.css";
import Layout from "../components/Layout";
import Image from "next/image";
import signup from "../assets/img/signup.jpg";
import { useRouter } from "next/router";

const Signup = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/login");
  };
  return (
    <Layout>
      <div className={styles.signup}>
        <main>
          <div className={styles.col_1}>
            <Image src={signup} alt="login" />
          </div>
          <div className={styles.col_2}>
            <form>
              <h4>
                Join <span>Happy</span>
                <span>Cow</span> Comunity
              </h4>
              <label>Username</label>
              <input placeholder="Username" type="text" />
              <label>Email</label>
              <input placeholder="Email" type="email" />
              <label>Password</label>
              <input placeholder="Password" type="password" />
              <button type="submit">Register</button>
            </form>
            <div className={styles.bottom}>
              <p>OR</p>
              <button onClick={handleClick}>Login</button>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default Signup;
