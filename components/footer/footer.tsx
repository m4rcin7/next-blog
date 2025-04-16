import Link from "next/link";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer id={styles.footer}>
      <ul className={styles["container-links"]}>
        <li>
          <Link href="/" className={styles.link}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className={styles.link}>
            About
          </Link>
        </li>
        <li>
          <Link href="/blog" className={styles.link}>
            Blog
          </Link>
        </li>
        <li>
          <Link href="/contact" className={styles.link}>
            Contact
          </Link>
        </li>
      </ul>
      <p>&copy;2024 MARCIN | All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
