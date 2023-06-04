import React from 'react';
import "./InfoPage.css";

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  return (
    <div className="about-container">
      <h3>Info Page</h3>

      <p className="section-title">Technologies</p>
      <ul>
        <li>HTML/CSS</li>        
        <li>Javascript</li>
        <li>Node</li>
        <li>Express</li>
        <li>React</li>
        <li>Redux</li>
        <li>Saga</li>
        <li>SQL</li>
        <li>Passport</li>
        <li>Postico</li>
        <li>Postgresql</li>
        <li>Postman</li>
        <li>Git</li>
        <li>Github</li>
        <li>Google Cloud</li>
          <li>Youtube Data API v3</li>
      </ul>
    </div>
  );
}

export default InfoPage;
