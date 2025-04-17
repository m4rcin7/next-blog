import Link from "next/link";
import styles from "./footer.module.css";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <h2>MARCIN</h2>
          <p>Tworzę rozwiązania cyfrowe, które inspirują i działają.</p>
        </div>

        <ul className={styles.links}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        <div className={styles.social}>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>&copy; 2024 MARCIN. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
