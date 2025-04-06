import React from 'react'
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import profile_img from '../../assets/about_profile.svg';

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>Hii ther</p>
                <p>I am good</p>
            </div>
            <div className="about-skills">
                <div className="about-skill">
                    <p>HTML & CSS</p>
                    <hr style={{width:"50%"}} />
                </div>
                <div className="about-skill">
                    <p>React</p>
                    <hr style={{width:"50%"}} />
                </div>
                <div className="about-skill">
                    <p>JS</p>
                    <hr style={{width:"50%"}} />
                </div>
                <div className="about-skill">
                    <p>ML</p>
                    <hr style={{width:"50%"}} />
                </div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>10+</h1>
            <p>Years of Experience</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>10+</h1>
            <p>Years of Experience</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>10+</h1>
            <p>Years of Experience</p>
        </div>
        <hr />
      </div>
    </div>
  )
}

export default About
