import React, {useRef, useState} from 'react';
import './Contact.css';

const Contact = (props) => {

  const form = useRef();
  const [done, setDone] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    console.log(form.current)
    setDone(true)
    form.reset();
  }


  return (
    <div className="contact-form">
      <div className="w-left">
        <div className="awesome">
          <span>Get in touch</span>
          <span>Contact me</span>
          <div className="blur s-blur1"
          style={{background: "#ABF1FF94"}}/>
        </div>
      </div>

      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" className="user" placeholder="Name"/>
          <input type="email" name="user_mail" className="user" placeholder="Email"/>
          <textarea name="message" className="user" placeholder="Message"/>
          <input type="submit" value="Send" className="button"/>
          <span>{done && "Thanks for Contacting me!"}</span>
          <div className="blur c-blur1"
               style={{background: "var(--purple)"}}/>
        </form>
      </div>
    </div>
  );
}

export default Contact;