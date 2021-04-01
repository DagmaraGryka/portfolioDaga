import React from 'react';
import Typical from 'react-typical'
import ParticlesBg from 'particles-bg'
import './Intro.scss'

const Intro = () => (
    <main className='container'>
      <div className=' text'>
        <h1 className='title'>Hi, I'm Dagmara.</h1>
        <h2 className='title'>I am Frontend Developer</h2>
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
      <ParticlesBg type="circle" bg={true} />
    </main>
  );
  
  export default Intro;