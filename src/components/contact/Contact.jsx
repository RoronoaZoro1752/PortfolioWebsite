import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_vp2lv3b', 'template_hdqv3tb', form.current, {
          publicKey: '4SWwCMlXRzcCMBzGk',
        })
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            form.current.reset();
          })
          .catch((error) => {
            console.error('FAILED...', error);
            
          });
     
    };

  return (
    <section className='contact section' id='contact'>
        <h2 className='section__title'>Get in touch</h2>
        <span className='section__subtitle'>Contact Me</span>

        <div className='contact__container container grid'>
            <div className='contact__content'>
                <h3 className='contact__title'>Talk to me</h3>
                <div className='contact__info'>
                    <div className='contact__card'>
                        <i className='bx bx-mail-send contact__card-icon'></i>
                        <h3 className='contact__card-title'>Email</h3>
                        <span className='contact__card-data'>subramanya2024@gmail.com</span>
                        <a href="mailto:subramanya2024@gmail.com" className='contact__button'>Write me{" "} 
                        <i className='bx bx-right-arrow-alt contact__button-icon'></i>
                        </a>

                    </div>


                </div>

            </div>
            <div className='contact__content'>
                <h3 className='contact__title'>Give me Feedback</h3>

                <form className='contact__form' ref={form} onSubmit={sendEmail}>
                    <div className='contact__form-div'>
                        <label className='contact__form-tag'>Name</label>
                        <input type="text" name='name' className='contact__form-input' placeholder='Insert your name'/>

                    </div>

                    <div className='contact__form-div'>
                        <label className='contact__form-tag'>Mail</label>
                        <input type="email" name='email' className='contact__form-input' placeholder='Insert your email'/>
                        
                    </div>

                    <div className='contact__form-div contact__form-area'>
                        <label className='contact__form-tag'>FeedBack</label>
                        <textarea name="project" cols="30" rows="10" className='contact__form-input ' placeholder='Your feedback is valuable.'></textarea>
                        
                    </div>
                    <button className='button button--flex'>Send Feedback</button>

                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact