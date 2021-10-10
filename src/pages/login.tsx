import styles from "../styles/Login.module.css";
import { useState } from "react";
import Layout from "../components/Layout";
import Image from "next/image";
import login from "../assets/img/login.jpg";
import { useRouter } from "next/router";
import axios from "axios";

type Props = {
  user: string | null;
  setUser: (val: string) => void;
};

const Login = ({ user, setUser }: Props) => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    router.push("/signup");
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/user/login", {
        email,
        password,
      });
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <Layout user={user} setUser={setUser}>
      <div className={styles.login}>
        <main>
          <div className={styles.col_1}>
            <Image src={login} alt="login" />
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
                type="text"
                value={password}
              />
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
