import React from 'react';
import '../App.css'
import {Button} from './Button';
import './HeroSection.css';
import image from '../images/IMG_2358.jpg'
import Typewriter from 'typewriter-effect';

function HeroSection() {
    return (
        <div className='hero-container'>
            <div className='intro'>
                <div className='image'>
                    <img src={image} />
                </div>
                <div className = 'text'>
                    <h1>Hello my name is Krupa!</h1>
                    <div className='type-writer'>
                       <p> I am </p>
                       <Typewriter
  
                            options={{
                                strings: [ 'an aspiring software engineer.','a creator.',' a computer science major.', 'a developer.'],
                                autoStart: true,
                                loop: true,
                                delay: 75,
                            }}
                        
                        />
                    </div> 
                </div>
            </div>
        
            
            <h1>CHECK OUT MY PROJECTS</h1>
            <div className="hero-btns">
                <Button className='btns' 
                        buttonStyle='btn--outline' 
                        buttonSize='btn--large'
                        link='/projects'>
                    Projects
                </Button>
                <Button className='btns' 
                        buttonStyle='btn--outline' 
                        buttonSize='btn--large'
                        link='/contact'>
                    About Me
                </Button>
            </div>
            
        </div>
    )
}

export default HeroSection
