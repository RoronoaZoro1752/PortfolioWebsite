import React, { useState } from 'react'
import './qualification.css'

const Qualification = () => {
    const[toggleState, settoggleState] = useState(0);
    const toggleTab = (index) => {
        settoggleState(index)
    }

  return (
    <section className='qualification section' id='qualification'>
        <h2 className='section__title'>Qualification</h2>
        <span className='section__subtitle'>My personal journey</span>

        <div className='qualification__container container'>
            <div className='qualification__tabs'>
                <div className={toggleState === 1 ? 'qualification__button qualification__active button--flex' : 'qualification__button button--flex'}  onClick={()=> toggleTab(1)}>
                    <i className='uil uil-graduation-cap qualification__icon'></i> Education
                </div>
                <div className={toggleState === 2 ? 'qualification__button qualification__active button--flex' : 'qualification__button button--flex'} onClick={()=> toggleTab(2)}>
                    <i className='uil uil-briefcase-alt qualification__icon'></i> Experience
                </div>
            </div>
            <div className='qualification__sections'>
                <div className={toggleState === 1 ? 'qualification__content qualification__content-active' : 'qualification__content'}>
                    <div className='qualification__data'>
                        <div>
                            <h3 className='qualification__title'>10th(SSLC)</h3>
                            <span className='qualification__subtitle'>New Public English School</span>
                            <div className='qualification__calender'> 
                                <i className='uil uil-calendar-alt'></i> 2017 - 2018
                            </div>
                        </div>

                        <div>
                            <span className='qualification__rounder'>
                            </span>
                            <span className='qualification__line'></span>
                        </div>
                    </div>

                    <div className='qualification__data'>
                        <div></div>

                        <div>
                            <span className='qualification__rounder'>
                            </span>
                            <span className='qualification__line'></span>
                        </div>
                        <div>
                            <h3 className='qualification__title'>12th(PUC)</h3>
                            <span className='qualification__subtitle'>VVS Sardar Patel PU College</span>
                            <div className='qualification__calender'> 
                                <i className='uil uil-calendar-alt'></i> 2019 - 2020
                            </div>
                        </div>


                    </div>

                    <div className='qualification__data'>
                        <div></div>

                        <div>
                            <span className='qualification__rounder'>
                            </span>
                        
                        </div>
                        <div>
                            <h3 className='qualification__title'>Engineering</h3>
                            <span className='qualification__subtitle'>East Point College of Engineering and Technology</span>
                            <div className='qualification__calendar'> 
                                <i className='uil uil-calendar-alt'></i> 2024 - Present
                            </div>
                        </div>


                    </div>

                </div>

                <div className={toggleState === 2 ? 'qualification__content qualification__content-active' : 'qualification__content'} >
                    <div className='qualification__data'>
                        <div>
                            <h3 className='qualification__title'>Full-Stack developer</h3>
                            <span className='qualification__subtitle'>ICT Academy</span>
                            <div className='qualification__calender'> 
                                <i className='uil uil-calendar-alt'></i> Sept. 2023 - Oct. 2023
                            </div>
                        </div>

                        <div>
                            <span className='qualification__rounder'>
                            </span>
                            <span className='qualification__line'></span>
                        </div>
                    </div>

                    <div className='qualification__data'>
                        <div></div>

                        <div>
                            <span className='qualification__rounder'>
                            </span>
                            <span className='qualification__line'></span>
                        </div>
                        <div>
                            <h3 className='qualification__title'>Weather Web App</h3>
                            <span className='qualification__subtitle'>Personal Project</span>
                            {/* <div className='qualification__calender'> 
                                <i className='uil uil-calendar-alt'></i> 2024 - Present
                            </div> */}
                        </div>


                    </div>

                    <div className='qualification__data'>
                        <div></div>

                        <div>
                            <span className='qualification__rounder'>
                            </span>
                           
                        </div>
                        <div>
                            <h3 className='qualification__title'>Blog Website</h3>
                            <span className='qualification__subtitle'>Personal Project</span>
                            {/* <div className='qualification__calender'> 
                                <i className='uil uil-calendar-alt'></i> 2024 - Present
                            </div> */}
                        </div>


                    </div>

                </div>

            </div>
        </div>
    </section>
  )
}

export default Qualification