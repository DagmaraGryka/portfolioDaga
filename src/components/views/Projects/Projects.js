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
        </div>
        <div>
            <h4>REACT APP</h4>
            <p>cos o projekcie </p>
            <a href="https://github.com/DagmaraGryka/My-first-React-app"></a>
        </div>
        <div>
            <p>cos o projekcie</p>
        </div>
      

      <div>
      <img src={pizzeria} alt="pizzeria"/>
        <div>
            <h4>PIZZERIA</h4>
            <p>cos o projekcie </p>
            <a href="https://github.com/DagmaraGryka/project-pizzeria"></a>
        </div>
        <div>
            <p>cos o projekcie</p>
        </div>
      </div>

      <div>
      <img src={travel} alt="travel"/>
        <div>
            <h4>REACT APP</h4>
            <p>cos o projekcie </p>
            <a href="https://github.com/DagmaraGryka/travel-agency"></a>
        </div>
        <div>
            <p>cos o projekcie</p>
        </div>
      </div>

    </div>
  </section>
);

export default Projects;