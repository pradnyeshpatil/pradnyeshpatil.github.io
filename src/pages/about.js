import React from 'react';
import Layout from '@theme/Layout';
import styles from './about.module.css';

export default function About() {
  return (
    <Layout
      title="About Pradnyesh Patil"
      description="Know more about Pradnyesh Patil - Software Engineer and Open Source Contributor"
    >
      <main className={styles.main}>
        <div className={styles.container}>
          {/* ✅ TEXT FIRST */}
          <div className={styles.textColumn}>
            <h1>Hey, I’m Pradnyesh Patil</h1>
            <p className={styles.subtitle}>
              Full-stack engineer, backend specialist.
            </p>
            <h2>About Me</h2>
            <p>
              I’m a Software Engineer with 4.5+ years of hands-on experience in architecting and developing scalable web applications using Ruby on Rails, React.js, and cloud infrastructure like AWS and GCP.
            </p>
            <p>
              I specialize in backend engineering with strong expertise in Ruby, PostgreSQL, Redis, and Elasticsearch. My work includes building RESTful APIs, optimizing database performance, and implementing CI/CD pipelines.
            </p>
            <p>
              I’ve led and contributed to mission-critical projects, focusing on writing clean, test-driven code using tools like RSpec and Cypress. My experience also includes working with Kubernetes for container orchestration and managing scalable deployments.
            </p>
            <p>
              I am passionate about creating maintainable software, contributing to open-source, and building tools that improve developer experience. I also enjoy sharing my learnings through blogs and code tutorials.
            </p>
            <p>
              Visit my blog at <a href="https://pradnyeshpatil.github.io/blog" target="_blank" rel="noreferrer" style={{ color: '#3b82f6' }}>pradnyeshpatil.github.io</a> where I write about backend architecture, Rails best practices, debugging tips, and productivity tools for developers.
            </p>
            <p>
              My goal is to continuously grow as an engineer while helping others build impactful software.
            </p>
            <h3>Connect with Me</h3>
            <div className={styles.socialLinks}>
              <a href="https://github.com/pradnyeshpatil" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/pradnyesh-patil-5b328b185/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
          {/* ✅ IMAGE ON RIGHT (ON DESKTOP) */}
          <div className={styles.photoColumn}>
            <img src="/img/profile.png" alt="Pradnyesh Patil" />
          </div>
        </div>
      </main>
    </Layout>
  );
}
