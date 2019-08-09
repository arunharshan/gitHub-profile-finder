import React from 'react';
import { Link } from 'react-router-dom';
const About = () => {
  return (
    <section className='jumbotron'>
      <div className='container'>
        <h1 className='jumbotron-heading  text-center'>
          Git User Finder App 1.0.0v
        </h1>
        <p className='lead'>
          This simple React JS app on 16.8 version, helps the user to search a
          git user and allow to view their details.
        </p>
        <div className='lead text-muted'>
          <ul>
            <li>Shows profile of 30 user on the initial view.</li>
            <li>
              User can search a git user by entering name. Ability to reset the
              search results
            </li>
            <li>Detailed profile view</li>
          </ul>
        </div>
        <p className='lead text-muted'>
          <strong>Technical/Spec:</strong>
          <br />
          React Js 16.8 v, React Dom router, Error message handling, Git Api
          calls using Axios (async and await- promise),ES6 javascript, Loading
          spinner, Form validation and submission. Deployed in Heroku
        </p>
        <p className='text-center'>
          <Link to='/' className='btn btn-primary my-2'>
            Go back to home page
          </Link>
        </p>
      </div>
    </section>
  );
};
export default About;
