import React from 'react';
import './Projects.css';
import CardItem from './ProjectItem';
import sudoku from '../../../images/projects/2.png'
import canvas from '../../../images/projects/3.png'
import website from '../../../images/projects/Screenshot (7).png';
import journal from '../../../images/projects/4.png'
import social from '../../../images/projects/social.png'

function Projects() {
  return (
    <div className='cards'>
      <h2> P r o j e c t s</h2>
      <h1>CHECK OUT MY CREATIONS</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          <CardItem
              src={website}
              text='Fully responsive personal portfolio website 
                    featuring projects and more about me.'
              label='React Bootstrap HTML CSS JavaScript'
              path='/'
            />
            <CardItem
              src={canvas}
              text='Webcam drawing program that maps coordinates extracted from 
                    hand recognition software to the screen, where colored circles 
                    are drawn and connected to simulate a brush stroke.'
              label='Python Numpy OpenCV'
              path='https://github.com/krupaddesai/air-canvas'
            />
          </ul>

          <ul className='cards__items'>
          <CardItem
              src={sudoku}
              text='Application written in Python that utilizes the Pygame library
                    to solve hundreds of sudoku puzzles by implementing a 
                    backtracking algorithm.'
              label='Python'
              path='https://github.com/krupaddesai/sudoku-solver'
            />
            <CardItem
              src= {journal}
              text='Application with a Flask backend and a ReactJS frontend 
                    allows its user to create, edit, and delete entries 
                    thus helping you meet your journaling needs and goals. '
              label='Flask React' 
              path='https://github.com/krupaddesai/wellness-journal-api'
            />
            <CardItem
              src={social}
              text='Full stack social media app that implements user registration,
                    login authentication and allows users to post, like, 
                    comment, etc.'
              label='MERNG'
              path='https://github.com/krupaddesai/MERNG-Moments'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Projects;
