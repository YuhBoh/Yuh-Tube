import React from 'react';
import './AboutPage.css';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
      <div className="about-container">
        <p>Purpose</p>
        <ul>
          <li>
            Interact with a medium that has given me so much value over the years.
          </li>
          <li>
            Gives insight as to how Youtube's webdesign, front-end, back-end, and security function and integrate to become the most accessible video and social media platform worldwide. 
          </li>
          <li>
            To test and push my programming and researching skills to its limits and create something that I can be proud of.
          </li>
        </ul>
      </div>
  );
}

export default AboutPage;
