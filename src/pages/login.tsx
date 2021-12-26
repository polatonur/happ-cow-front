import styles from "../styles/Login.module.css";
import { useState } from "react";
import Layout from "../components/Layout";
import Image from "next/image";
import loginImage from "../assets/img/login.jpg";
import { useRouter } from "next/router";
import axios from "axios";
import Cookies from "js-cookie";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const { login } = useAuth();

  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    router.push({ pathname: "/signup", query: { next: router.query.next } });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response: {
        data: { id: string; token: string; username: string };
      } = await axios.post("https://happ-cow-onur.herokuapp.com/user/login", {
        email,
        password,
      });
      Cookies.set("userId", response.data.id);
      Cookies.set("userToken", response.data.token);
      Cookies.set("userName", response.data.username);
      login();
      if (router.query?.next) {
        router.push(`${router.query?.next}`);
      } else {
        router.push("/");
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <Layout>
      <div className={styles.login}>
        <main>
          <div className={styles.col_1}>
            <Image src={loginImage} alt="login" />
          </div>
          <div className={styles.col_2}>
            <form onSubmit={(e) => handleSubmit(e)}>
              <h4>Login to Your Account</h4>
              <label>Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                type="text"
                value={email}
              />
              <label>Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                type="password"
                value={password}
              />
              <button type="submit">Login</button>
            </form>
            <div className={styles.bottom}>
              <p>OR</p>
              <button type="button" onClick={handleClick}>
                Register
              </button>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default Login;
