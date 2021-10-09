import Layout from "../components/Layout";
import styles from "../styles/AddReview.module.css";
import { Star } from "phosphor-react";

const AddReview = () => {
  return (
    <Layout>
      <div className={styles.add_review}>
        <main>
          <h1>
            Write a review for <span>La Maison Vegane</span>
          </h1>
          <p>
            We appreciate your honest review. But if you are upset, consider
            approaching the business directly to give the owner an opportunity
            to make improvements. All malicious, profane, food poisoning remarks
            will be removed.
          </p>
          <form>
            <label className={styles.rating_label}>Overall Rating?</label>
            <div className={styles.rating}>
              {" "}
              {[1, 2, 3, 4, 5].map((elem) => (
                <Star key={elem} size={35} color="#ffcc00" />
              ))}
            </div>
            <label>Review Title</label>
            <input
              required
              type="text"
              placeholder="How would you sum it up?"
            />
            <label>My Review</label>
            <textarea
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
              <input type="text" placeholder="Something good..." />
            </div>
            <div className={styles.pros_cons}>
              <span>2.</span>{" "}
              <input type="text" placeholder="Something good..." />
            </div>
            <div className={styles.pros_cons}>
              <span>3.</span>{" "}
              <input type="text" placeholder="Something good..." />
            </div>
            <label>Cons:</label>
            <div className={styles.pros_cons}>
              {" "}
              <span>1.</span> <input type="text" placeholder="Dislike the..." />
            </div>
            <div className={styles.pros_cons}>
              <span>2.</span> <input type="text" placeholder="Dislike the..." />
            </div>
            <div className={styles.pros_cons}>
              <span>3.</span> <input type="text" placeholder="Dislike the..." />
            </div>
            <button>Save</button>
          </form>
        </main>
      </div>
    </Layout>
  );
};

export default AddReview;
