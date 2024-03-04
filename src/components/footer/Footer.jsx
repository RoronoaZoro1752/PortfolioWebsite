import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer__container container'>
            <h1 className='footer__title'>My Portfolio</h1>
            <ul className='footer__list'>
                <li>
                    <a href="#home" className='footer__link'>Home</a>
                </li>
                <li>
                    <a href="#about" className='footer__link'>About</a>
                </li>
                <li>
                    <a href="#skills" className='footer__link'>Skills</a>
                </li>
            </ul>

            <div className='footer__social'>
                <a href="mailto:subramanya2024@gmail.com" className='home__social-icon footer__social-link' target='_blank'>
                <i class="uil uil-envelope-alt"></i>
                </a>

                <a href="https://www.linkedin.com/in/subramanya-m-59772a227/" className='home__social-icon footer__social-link' target='_blank'>
                <i class="uil uil-linkedin"></i>
                </a>

                <a href="https://github.com/RoronoaZoro1752" className='home__social-icon footer__social-link' target='_blank'>
                <i class="uil uil-github"></i>
                </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer