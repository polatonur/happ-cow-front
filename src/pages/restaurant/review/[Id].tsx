import Layout from "../../../components/Layout";
import styles from "../../../styles/Review.module.css";
import { Star } from "phosphor-react";
import { useState } from "react";
import { GetServerSideProps } from "next";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

type Props = {
  id: string;
  name: string;
  previousPageRef: { current: string };
};
const AddReview = ({ id, name, previousPageRef }: Props) => {
  const [rating, setRating] = useState(0);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [pros, setPros] = useState<string[]>([]);
  const [cons, setCons] = useState<string[]>([]);
  const [displayReviewMessage, setDisplayReviewMessage] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const userId = Cookies.get("userId");
    const token = Cookies.get("userToken");
    const userName = Cookies.get("userName");
    try {
      const response = await axios.post(
        "https://happy-cow-back.api.dotonur.dev/restaurant/review",
        {
          title,
          body,
          userId,
          restaurantId: id,
          rating,
          userName: userName,
          pros: pros,
          cons: cons,
        },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      setDisplayReviewMessage(true);
      setTimeout(() => {
        if (router.query?.next) {
          router.push({
            pathname: `${router.query?.next}`,
            query: { id: id },
          });
        } else {
          router.back();
        }
        setDisplayReviewMessage(false);
      }, 2000);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  if (displayReviewMessage) {
  }

  return (
    <Layout>
      <div className={styles.add_review}>
        <main>
          <h1>
            Write a review for <span>{name}</span>
          </h1>
          <p>
            We appreciate your honest review. But if you are upset, consider
            approaching the business directly to give the owner an opportunity
            to make improvements. All malicious, profane, food poisoning remarks
            will be removed.
          </p>
          <form onSubmit={(e) => handleSubmit(e)}>
            <label className={styles.rating_label}>Overall Rating?</label>
            <div className={styles.rating}>
              {" "}
              {[1, 2, 3, 4, 5].map((elem) => (
                <Star
                  className={styles.star}
                  key={elem}
                  size={35}
                  color="#ffcc00"
                  weight={rating >= elem ? "fill" : "regular"}
                  onClick={() => setRating(elem)}
                />
              ))}
            </div>
            <label>Review Title</label>
            <input
              onChange={(e) => setTitle(e.target.value)}
              required
              value={title}
              type="text"
              placeholder="How would you sum it up?"
            />
            <label>My Review</label>
            <textarea
              onChange={(e) => setBody(e.target.value)}
              value={body}
              required
              cols={20}
              rows={10}
              placeholder="What did you you think the venue, food, price? Give us all details!"
            />
            <h3>Pros and Cons</h3>
            <p>
              Use Pros to denote positive aspects, and Cons to describe areas
              that are in need of improvement. Fill in as many pros and cons as
              you feel necessary. Examples: excellent food, good value, friendly
              staff, nice vibe, smokey, noisy, small portions, etc.
            </p>
            <label>Pros:</label>
            <div className={styles.pros_cons}>
              {" "}
              <span>1.</span>{" "}
              <input
                onChange={(e) => {
                  const list = [...pros];
                  list[0] = e.target.value;
                  setPros(list);
                }}
                value={pros[0]}
                type="text"
                placeholder="Something good..."
              />
            </div>
            <div className={styles.pros_cons}>
              <span>2.</span>{" "}
              <input
                onChange={(e) => {
                  const list = [...pros];
                  list[1] = e.target.value;
                  setPros(list);
                }}
                value={pros[1]}
                type="text"
                placeholder="Something good..."
              />
            </div>
            <div className={styles.pros_cons}>
              <span>3.</span>{" "}
              <input
                onChange={(e) => {
                  const list = [...pros];
                  list[2] = e.target.value;
                  setPros(list);
                }}
                value={pros[2]}
                type="text"
                placeholder="Something good..."
              />
            </div>
            <label>Cons:</label>
            <div className={styles.pros_cons}>
              {" "}
              <span>1.</span>{" "}
              <input
                onChange={(e) => {
                  const list = [...cons];
                  list[0] = e.target.value;
                  setCons(list);
                }}
                value={cons[0]}
                type="text"
                placeholder="Dislike the..."
              />
            </div>
            <div className={styles.pros_cons}>
              <span>2.</span>{" "}
              <input
                onChange={(e) => {
                  const list = [...cons];
                  list[1] = e.target.value;
                  setCons(list);
                }}
                value={cons[1]}
                type="text"
                placeholder="Dislike the..."
              />
            </div>
            <div className={styles.pros_cons}>
              <span>3.</span>{" "}
              <input
                onChange={(e) => {
                  const list = [...cons];
                  list[2] = e.target.value;
                  setCons(list);
                }}
                value={cons[2]}
                type="text"
                placeholder="Dislike the..."
              />
            </div>
            <button type="submit">Save</button>
          </form>
        </main>
        <section
          style={{ marginBottom: displayReviewMessage ? "0" : "-70px" }}
          className={styles.click_message}
        >
          <div>
            <span>Your review added</span>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AddReview;

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const name = context.query.name;

    const id = context.query.Id;
    return {
      props: {
        name,
        id,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
