import React from 'react';
import './Projects.scss';

import ReactApp from '../../../images/ReactApp.png';
import pizzeria from '../../../images/pizzeria.png';
import travel from '../../../images/travel.png';

const Projects = () => (
  <section className='container'>
      <h2> Projects i took part in </h2>
      
      <div className='box'>
        <div className='imgBox'>
          <img src={ReactApp} alt="REACT"/>
          <a href="https://github.com/DagmaraGryka/My-first-React-app"><i class="fab fa-github-square"></i></a>
        </div>
        <div>
          <h4>REACT APP</h4>
          <p>cos o projekcie </p>
        </div>
      
        <div className='imgBox'>
          <img src={pizzeria} alt="pizzeria"/>
          <a href="https://github.com/DagmaraGryka/project-pizzeria"><i class="fab fa-github-square"></i></a>
        </div>
        <div>
          <h4>PIZZERIA</h4>
          <p>cos o projekcie </p>
        </div>

        <div className='imgBox'>
          <img src={travel} alt="travel"/>
          <a href="https://github.com/DagmaraGryka/travel-agency"><i class="fab fa-github-square"></i></a>
        </div>
        <div>
          <h4>REACT APP</h4>
          <p>cos o projekcie </p>
        </div>
    </div>
  </section>
);

export default Projects;