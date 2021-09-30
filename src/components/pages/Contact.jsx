import React from 'react';
import './Contact.css'
import AboutImg from '../../images/oie_5Be29GVhovIV.png';
import { MdEmail, MdPhone, MdPlace } from 'react-icons/md';
import {FaLinkedin} from 'react-icons/fa'
import {Link} from 'react-router-dom';
import pdf from '../../PortfolioResume.pdf'


function Contact() {
    return (
        <div className="container">
              <div className="aboutSection__left">
                <img className="aboutImg" src={AboutImg} alt="Img" />
            </div>
            <div className="aboutSection__right">
                <h5>Let me introduce myself</h5>
                <h2> ABOUT ME</h2>
                <div className='divider'/>
               
                <p>
                    Hello! My name is Krupa. I was born and raised in San Jose, CA
                    and I am currently a 3rd year Computer Science major at the University 
                    of California, Davis. My interests include software design and development,
                    web development, and computer vision. You can find my resume 
                    <a href = {pdf} target = '_blank' text-decoration = 'none'> HERE </a> 
                    and feel free to contact me!
                </p>
                <div className='divider'/>
                <h5>Get in touch</h5>
                <h2> CONTACT</h2>
                <div className='divider'/>
                
                <div className='contact-info'>
                    <div className='icon'><MdEmail/></div>
                    <div className='info'>
                        <p>desaikrupa7890@gmail.com</p>
                    </div>
                </div>
                <div className='contact-info'>
                    <div className='icon'><MdPhone/></div>
                    <div className='info'>
                        <p>(408) 460-2741</p>
                    </div>
                </div>
                <div className='contact-info'>
                    <div className='icon'><MdPlace/></div>
                    <div className='info'>
                        <p>San Jose, CA</p>
                    </div>
                </div>
                <div className='contact-info'>
                    <div className='icon'><FaLinkedin/></div>
                    <div className='info'>
                        <a target='_blank' href="https://www.linkedin.com/in/krupaddesai1">Connect With Me</a>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact

