import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero">
        <h1>Welcome to EduQuest</h1>
        <p>AI-Powered Personalized Learning</p>
        <button className="explore-btn">Explore Courses</button>
      </section>
      
      <section className="features">
        <div className="feature-card">
          <h2>AI-Powered Learning</h2>
          <p>Get personalized content based on your learning style.</p>
        </div>
        <div className="feature-card">
          <h2>Interactive Quizzes</h2>
          <p>Test your knowledge with AI-generated quizzes.</p>
        </div>
        <div className="feature-card">
          <h2>Progress Tracking</h2>
          <p>Track your learning journey with detailed insights.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
