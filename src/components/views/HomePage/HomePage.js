import React from 'react';
import './HomePage.scss';
import Typical from 'react-typical'
//import About from '../About/About'


const HomePage = () => (
  <main className='background'>
    <div className='container text'>
      <h1>Hi, I'm Dagmara.</h1>
      <h2>I am Frontend Developer</h2>
      <p>
        I create websites and apps using {''}
        <Typical
          loop={Infinity}
          wrapper='b'
          steps={[
              'JavaScript',1000,
              'RWD',1000,
              'HTML',1000,
              'CSS',1000,
              'Bootstrap',1000,
              'AJAX',1000,
              'React',1000,
              'Redux',1000,
              'React Router',1000,
            ]}
        />
      </p>
    </div>
  </main>
);

export default HomePage;