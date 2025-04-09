"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./home.module.css";

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className={styles.container}>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Frontend Developer &{" "}
            <span className={styles.accent}>UI Specialist</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Creating beautiful, responsive web experiences with modern
            technologies
          </p>
          <div className={styles.heroCta}>
            <Link href="/projects" className={styles.primaryButton}>
              View My Work
            </Link>
            <Link href="/contact" className={styles.outlineButton}>
              Get In Touch
            </Link>
          </div>
        </div>
        <div className={styles.heroImageContainer}>
          {/* <Image
            src={heroImage}
            alt="Developer working on code"
            className={styles.heroImage}
            priority
            placeholder="blur"
          /> */}
        </div>
      </section>

      <section className={styles.aboutSection}>
        <div className={styles.aboutImageContainer}>
          {/* <Image
            src={profilePic}
            alt="Profile picture"
            className={styles.profileImage}
            width={240}
            height={240}
            placeholder="blur"
          /> */}
        </div>
        <div className={styles.aboutContent}>
          <h2 className={styles.sectionTitle}>
            Hi, I'm <span className={styles.accent}>Marcin</span>
          </h2>
          <p className={styles.aboutText}>
            I'm a frontend developer based in Warsaw with 4+ years of experience
            building modern web applications. I specialize in React, Next.js,
            and creating intuitive user interfaces.
          </p>
          <p className={styles.aboutText}>
            When I'm not coding, you'll find me exploring new technologies,
            contributing to open source, or sharing what I learn through
            articles on this blog.
          </p>
          <div className={styles.skillsList}>
            <span className={styles.skillTag}>React</span>
            <span className={styles.skillTag}>Next.js</span>
            <span className={styles.skillTag}>TypeScript</span>
            <span className={styles.skillTag}>Tailwind CSS</span>
            <span className={styles.skillTag}>UI/UX</span>
          </div>
        </div>
      </section>

      <section className={styles.projectsSection}>
        <h2 className={styles.sectionTitle}>
          Featured <span className={styles.accent}>Projects</span>
        </h2>

        <div className={styles.filterTabs}>
          <button
            className={`${styles.filterTab} ${
              activeTab === "all" ? styles.activeTab : ""
            }`}
            onClick={() => setActiveTab("all")}
          >
            All
          </button>
          <button
            className={`${styles.filterTab} ${
              activeTab === "web" ? styles.activeTab : ""
            }`}
            onClick={() => setActiveTab("web")}
          >
            Web Apps
          </button>
          <button
            className={`${styles.filterTab} ${
              activeTab === "ui" ? styles.activeTab : ""
            }`}
            onClick={() => setActiveTab("ui")}
          >
            UI Design
          </button>
        </div>

        <div className={styles.projectsGrid}>
          <div className={styles.projectCard}>
            <div className={styles.projectImageContainer}>
              {/* <Image
                src={projectImage1}
                alt="Project 1"
                className={styles.projectImage}
                placeholder="blur"
              /> */}
            </div>
            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>E-commerce Dashboard</h3>
              <p className={styles.projectDescription}>
                A responsive admin dashboard with dark mode, data visualization,
                and real-time updates.
              </p>
              <div className={styles.projectTags}>
                <span className={styles.projectTag}>React</span>
                <span className={styles.projectTag}>Redux</span>
                <span className={styles.projectTag}>Chart.js</span>
              </div>
              <Link
                href="/projects/ecommerce-dashboard"
                className={styles.projectLink}
              >
                View Project
              </Link>
            </div>
          </div>

          <div className={styles.projectCard}>
            <div className={styles.projectImageContainer}>
              {/* <Image
                src={projectImage2}
                alt="Project 2"
                className={styles.projectImage}
                placeholder="blur"
              /> */}
            </div>
            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>Recipe Finder App</h3>
              <p className={styles.projectDescription}>
                A Next.js application for discovering and saving recipes with
                filtering options.
              </p>
              <div className={styles.projectTags}>
                <span className={styles.projectTag}>Next.js</span>
                <span className={styles.projectTag}>API</span>
                <span className={styles.projectTag}>Tailwind</span>
              </div>
              <Link
                href="/projects/recipe-finder"
                className={styles.projectLink}
              >
                View Project
              </Link>
            </div>
          </div>

          <div className={styles.projectCard}>
            <div className={styles.projectImageContainer}>
              {/* <Image
                src={projectImage3}
                alt="Project 3"
                className={styles.projectImage}
                placeholder="blur"
              /> */}
            </div>
            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>Fitness Tracker</h3>
              <p className={styles.projectDescription}>
                A mobile-first web app for tracking workouts and visualizing
                progress.
              </p>
              <div className={styles.projectTags}>
                <span className={styles.projectTag}>TypeScript</span>
                <span className={styles.projectTag}>Firebase</span>
                <span className={styles.projectTag}>PWA</span>
              </div>
              <Link
                href="/projects/fitness-tracker"
                className={styles.projectLink}
              >
                View Project
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.viewAllContainer}>
          <Link href="/projects" className={styles.viewAllButton}>
            View All Projects
          </Link>
        </div>
      </section>

      <section className={styles.contactSection}>
        <div className={styles.contactContent}>
          <h2 className={styles.sectionTitle}>
            Let's <span className={styles.accent}>Connect</span>
          </h2>
          <p className={styles.contactText}>
            Interested in working together or have a question? Feel free to
            reach out!
          </p>
          <Link href="/contact" className={styles.primaryButton}>
            Contact Me
          </Link>
        </div>
        <div className={styles.socialLinks}>
          <a
            href="https://github.com/yourusername"
            className={styles.socialLink}
            aria-label="GitHub"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          <a
            href="https://twitter.com/yourusername"
            className={styles.socialLink}
            aria-label="Twitter"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            className={styles.socialLink}
            aria-label="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
