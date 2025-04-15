import Image from "next/image";
import styles from "./contact.module.css";
import photo1 from "@/images/photo1.png";
import photo2 from "@/images/photo2.png";
import photo3 from "@/images/photo3.png";
import { SiCodeigniter } from "react-icons/si";
import { FiGitlab, FiInstagram } from "react-icons/fi";
import { GiHeartInside } from "react-icons/gi";

const Contact = () => {
  return (
    <section className={styles.contactSection}>
      <h2 className={styles.title}>Get in Touch</h2>

      <div className={styles.cardsWrapper}>
        <div className={styles.card}>
          <Image className={styles.photo} src={photo1} alt="photo1" />
          <div className={styles.icon}>
            <GiHeartInside />
          </div>
          <a href="tel:+123456789" className={styles.contactLink}>
            <SiCodeigniter /> +123 456 789
          </a>
        </div>

        <div className={styles.card}>
          <Image className={styles.photo} src={photo2} alt="photo2" />
          <div className={styles.icon}>
            <FiInstagram />
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactLink}
          >
            <SiCodeigniter /> @instagram
          </a>
        </div>

        <div className={styles.card}>
          <Image className={styles.photo} src={photo3} alt="photo3" />
          <div className={styles.icon}>
            <FiGitlab />
          </div>
          <a
            href="https://github.com/markopersonally"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactLink}
          >
            <SiCodeigniter /> markopersonally
          </a>
        </div>
      </div>

      <form className={styles.form}>
        <h3 className={styles.formTitle}>Contact Form</h3>
        <input
          type="text"
          placeholder="Name"
          required
          className={styles.input}
        />
        <input
          type="email"
          placeholder="Email"
          required
          className={styles.input}
        />
        <textarea
          placeholder="Your message..."
          rows={5}
          className={styles.textarea}
        ></textarea>
        <button type="submit" className={styles.button}>
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
