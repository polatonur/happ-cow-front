import React, { useState } from "react";
import styles from "../styles/Signup.module.css";
import Layout from "../components/Layout";
import Image from "next/image";
import signup from "../assets/img/signup.jpg";
import { useRouter } from "next/router";
import axios from "axios";
import Cookies from "js-cookie";

type Props = {
  user: string | null;
  setUser: (val: string | null) => void;
};

const Signup = ({ user, setUser }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const router = useRouter();
  const handleClick = () => {
    router.push("/login");
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response: { data: { id: string; token: string } } =
        await axios.post("http://localhost:5000/user/signup", {
          email,
          password,
          username,
        });
      Cookies.set("UserId", response.data.id);
      Cookies.set("UserToken", response.data.token);
      setUser(response.data.token);
      router.push("/");
    } catch (error: any) {
      console.log(error.message);
    }
  };
  return (
    <Layout user={user} setUser={setUser}>
      <div className={styles.signup}>
        <main>
          <div className={styles.col_1}>
            <Image src={signup} alt="login" />
          </div>
          <div className={styles.col_2}>
            <form onSubmit={(e) => handleSubmit(e)}>
              <h4>
                Join <span>Happy</span>
                <span>Cow</span> Comunity
              </h4>
              <label>Username</label>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                type="text"
              />
              <label>Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                type="email"
              />
              <label>Password</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                type="password"
              />
              <button type="submit">Register</button>
            </form>
            <div className={styles.bottom}>
              <p>OR</p>
              <button type="button" onClick={handleClick}>
                Login
              </button>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default Signup;
