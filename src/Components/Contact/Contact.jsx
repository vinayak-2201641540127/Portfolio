import React from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';


const Contact = () => {
  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk </h1>
                <p>Hey there How are you</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" />
                        <p>Vin@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt="" />
                        <p>12345678</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="" />
                        <p>Location</p>
                    </div>
                </div>
            </div>
            <form className="contact-right">
                <label htmlFor="">Your name</label>
                <input type="text" placeholder='Enter name' name='name' />
                <label htmlFor="">Email</label>
                <input type="email" placeholder='Enter email' name='email' />
                <label htmlFor="">Write message here</label>
                <textarea name="message" rows='8' placeholder='Enter message'></textarea>
                <button type='submit' className="contact-submit">Submit now</button>
            </form>
        </div>
         
    </div>
  )
}

export default Contact
