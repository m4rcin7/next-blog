import Image from "next/image";
import img1 from "@/images/about1.png";
import img2 from "@/images/about2.png";
import styles from "./page.module.css";

const About = () => {
  return (
    <section className={styles.aboutSection}>
      <h2 className={styles.heading}>About me</h2>

      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <Image
            src={img1}
            alt="Developer portrait"
            className={styles.image}
            placeholder="blur"
            priority
          />
        </div>

        <div className={styles.contentWrapper}>
          <p className={styles.bio}>
            I am a 24-year-old front-end developer based near Warsaw, with a
            passion for creating dynamic and user-friendly web interfaces. With
            expertise in modern web technologies and a keen eye for design, I
            specialize in building responsive and efficient applications that
            deliver exceptional user experiences.
          </p>

          <p className={styles.bio}>
            My toolkit includes React, Next.js, TypeScript, and modern CSS
            techniques. I'm committed to continuous learning and regularly
            contribute to open-source projects.
          </p>

          <div className={styles.ctaContainer}>
            <button className={styles.primaryButton}>View Portfolio</button>
            <button className={styles.secondaryButton}>Download CV</button>
          </div>
        </div>

        <div className={styles.imageWrapper}>
          <Image
            src={img2}
            alt="Developer workspace"
            className={styles.image}
            placeholder="blur"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
