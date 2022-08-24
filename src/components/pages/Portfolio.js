import React from 'react';
import project1Image from '../../assets/images/1.png';
import project2Image from '../../assets/images/2.png';
import project3Image from '../../assets/images/3.png';
import '../../styles/portfolio.css';

export default function Portfolio() {
  return (
    <div>
      <h1 className="portfolio">Portfolio</h1>

      <div className="projectPage">
        <p>
          <img className="project1Image" src={project1Image} alt="Running Track" />
          <a className="project1Link" href="https://running-tracks.herokuapp.com/">
            Project1: Running Track
          </a>{' '}
          <br />
          This project is to build an app that can help clients who loves running to track what they
          have achieved with their run in day, week, month or year. Github repos link:{' '}
          <a href="https://github.com/nicolmmm/RunningTracks">Click Here</a>
        </p>
      </div>

      <div className="projectPage">
        <p className="project2">
          <img className="project2Image" src={project2Image} alt="Moovee" />
          <a className="project2Link" href="https://leoelicos.github.io/bcs-07-moovee/">
            Project2: Moovee
          </a>
          <br />
          Moovee is an app that allowes user to search for their favorite movies and watch the
          trailer of that movie by youtube API. For delails and codebase: Github repos link:{' '}
          <a href="https://github.com/umairkhalid/movie-planner">Click here</a>
        </p>
      </div>

      <div className="projectPage">
        <p>
          <img className="project3Image" src={project3Image} alt="Ocean Fun" />
          <a className="project3Link" href="https://andrewouyang64.github.io/apw/">
            Password Generator
          </a>{' '}
          <br />
          This app is a MERN stack application. In this app, clients can search for advertisement
          about training sections for ocean activities or they can post ads and leave comment.
          Github repos link: <a href="https://github.com/andrewouyang64/Ocean-Fun">Click Here</a>
          <br></br>
          <br></br>
        </p>
      </div>
    </div>
  );
}
