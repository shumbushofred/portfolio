import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/linkedIn Fred-modified.png'

const About = () => {
return (
    <div id='about'className='about'> 
            <div className="about-title">
                    <h1>About Me</h1>
                    <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                    <div className="about-left">
                            <img src={profile_img} alt="" />
                    </div>
                    <div className="about-right">
                            <div className="about-para">
                                    <p>
                                            I am a passionate and dedicated developer with a strong background in web development. I have experience working with various technologies including JavaScript, React, and Node.js. I enjoy solving complex problems and continuously learning new skills to improve my craft. My goal is to build efficient and scalable applications that provide a great user experience.
                                    </p>
                                    <p>
                                            I am currently seeking new opportunities to work on exciting projects and collaborate with talented individuals. If you are looking for a developer who is committed to delivering high-quality work, I would love to hear from you. 
                                    </p>
                            </div>
                            <div className="about-skills">
                                <div className="about-skill"><p>HTML & CSS</p><hr style={{width: '50%'}}/></div>
                                <div className="about-skill"><p>React JS</p><hr style={{width: '70%'}}/></div>
                                <div className="about-skill"><p>JavaScript</p><hr style={{width: '60%'}}/></div>
                                <div className="about-skill"><p>Next Js</p><hr style={{width: '50%'}}/></div>
                            </div>
                    </div>
            </div>
            <div className="about-achievements">
                    <div className="about-achievement">
                            <h1>10+</h1>
                            <p> YEARS OF EXPERIENCE</p>
                    </div>
                    <hr />
                    <div className="about-achievement">
                            <h1>90+</h1>
                            <p>PROJECTS COMPLETED</p>
                    </div>
                    <hr />
                    <div className="about-achievement">
                            <h1>15+</h1>
                            <p>HAPPY CLIENTS</p>
                    </div>
            </div>
    </div>
)
}

export default About