import React from 'react';
import './BlogPage.css';
import BackButton from './components/BackButton';

const BlogPage = () => {
  return (
    <div className="blog-page">
      <header className="header">
        <h1>Our Blog</h1>
      </header>
      <BackButton />
      <section className="blog-content">
        <article className="blog-post">
          <h2>Maintenance Tips for Homeowners</h2>
          <p>Discover essential maintenance tips to keep your home in top shape, from seasonal checklists to DIY repairs.</p>
        </article>
        <article className="blog-post">
          <h2>Choosing the Right Contractor</h2>
          <p>Learn how to select the best contractor for your project, including questions to ask and red flags to watch out for.</p>
        </article>
        <article className="blog-post">
          <h2>Energy Efficiency Upgrades</h2>
          <p>Explore ways to improve your home's energy efficiency, from insulation to smart home technology.</p>
        </article>
        <article className="blog-post">
          <h2>Latest Trends in Home Renovation</h2>
          <p>Stay updated on the latest trends in home renovation, including popular materials and design styles.</p>
        </article>
      </section>
    </div>
  );
};

export default BlogPage; 