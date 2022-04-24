import React from 'react';

import '../css/reset.css';
import '../css/main.css';
import '../css/pages.css';
import '../css/skills.css';
import '../css/projects.css';
import '../css/contact.css';

export default class App extends React.Component {
	render() {
		return (
			<>

<header className="navigation">
        <nav className="navLinks">
            <a href="#about" className="link about">About</a> 
            <a href="#skills" className="link skills">Skills</a>
            <a href="#projects" className="link projects">Projects</a>
            <a href="#contact" className="link contact">Contact</a>
        </nav>

        {/* <!-- <div className="toggleLightDark">



        </div> --> */};
    </header>

    <div className="quickAccess">
        <div className="SOCIALS">
            <a title="GitHub" className="BT icon github" href="https://github.com/NCooper00" alt="Github icon" target="_blank" rel="noreferrer"></a>
            <a title="LinkedIn" className="BT icon linkedin" href="https://www.linkedin.com/in/nick-cooper-7aa56b223/" alt="LinkedIn icon" target="_blank" rel="noreferrer"></a>
            <a title="Resume" className="BT icon resume" href="https://drive.google.com/file/d/1-p66rZbyAN6d4Gws6YlPGmKMFP0NVirH/view?usp=sharing" alt="Resume icon" target="_blank" rel="noreferrer"></a>
        </div>
        <div className="lightDark" aria-enabled="false">
            <div className="BT icon DARK"></div>
            <div className="BT icon LIGHT"></div>
        </div>
    </div>

   

    <div className="PAGE page-one" id="about">
        <div className="ABOUT">
            <div className="nameStack">
                <h1 className="NAME">Nick Cooper</h1>
                <div className="fullStack">Full Stack Web Developer</div>
            </div>

            <div className="sunHolder">
                <div className="BT sun" alt="Sun icon"></div>
            </div>

            <div className="aboutMeHolder">
                <p className="introduction">Hi! I am a developer based in Seattle who loves designing and creating websites.</p>
            </div>
        </div>
    </div>


    <div className="PAGE page-two" id="skills">
        <div className="SKILLS">

            <div className="techGroupHolder">
                <div className="techGroup">
                    <h1 className="techHead">Languages</h1>
                    <ul className="techList programming"> 
                        <li className="tech javascript">Javascript</li>
                        <li className="tech css">CSS</li>
                        <li className="tech html">HTML</li>
                    </ul>
                </div>
                <div className="techGroup">
                    <h1 className="techHead">Frameworks</h1>
                    <ul className="techList framework"> 
                        <li className="tech nodeJS">NodeJS</li>
                        <li className="tech expressJS">Express.js</li>
                        <li className="tech ">Sequelize</li>
                        <li className="tech reactJS">ReactJS</li>
                        <li className="tech flask">Flask</li>
                        <li className="tech handlebars">Handlebars</li>
                        <li className="tech ">Passport</li>
                        <li className="tech ">BCrypt</li>
                        <li className="tech ">Mongoose</li>
                    </ul>
                </div>
                <div className="techGroup">
                    <h1 className="techHead">Databases</h1>
                    <ul className="techList databases"> 
                        <li className="tech mySQL">MySQL</li>
                        <li className="tech mongoDB">MongoDB</li>
                    </ul>
                </div>
            </div>

        </div>
    </div>


     <div className="PAGE page-three" id="projects">
        <div className="PROJECTS">
            <h1 className="myProjects">Some things I've built</h1>
            <div className="cycler">
                <div className="carousel-container">
                    <div className="carousel">
                        <div className="website spaceChill">
                            <div className="iconBOXG">
                                <a target="_blank" rel="noreferrer" href="https://github.com/NCooper00/Moon-Phase-Website" alt="Github icon for Space Chill" className="BT webGIT"></a>
                            </div>
                            <div className="iconBOXW">
                                <a target="_blank" rel="noreferrer" href="https://ncooper00.github.io/Moon-Phase-Website/" alt="Website icon for Space Chill" className="webSITE"></a>
                            </div>
                        </div>
                        <div className="website crescentsArcana">
                            <div className="iconBOXG">
                                <a target="_blank" rel="noreferrer" href="https://github.com/NCooper00/Crescents-Arcana" alt="Github icon for Crescent's Arcana" className="BT webGIT"></a>
                            </div>
                            <div className="iconBOXW">
                                <a target="_blank" rel="noreferrer" href="https://crescents-arcana.herokuapp.com/" alt="Website icon for Crescent's Arcana" className="webSITE"></a>
                            </div>
                        </div>
                        <div className="website npcTracker">
                            <div className="iconBOXG">
                                <a target="_blank" rel="noreferrer" href="https://github.com/dianaiuliacalin/dundun-dnd" alt="Github icon for NPC Tracker" className="BT webGIT"></a>
                            </div>
                            <div className="iconBOXW">
                                <a target="_blank" rel="noreferrer" href="https://npc-track.herokuapp.com/" alt="Website icon for NPC Tracker" className="webSITE"></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="btnSurround">
                    <div className="projectbtn previous">Prev</div>
                    <div className="projectbtn next">Next</div>
                </div>
                <div className="cycler">
                    <div className="siteDescScroller">
                        <div className="siteContainer">


                            {/* <!-- For Space Chill --> */};
                        <div className="siteDesc">
                            <div className="a MADEWITH">
                                <h1 className="aHead MWHead">Made With</h1>
                                <ul className="aList MWList">
                                    <li className="ALI">CSS</li>
                                    <li className="ALI">Javascript</li>
                                    <li className="ALI">HTML</li>
                                </ul>
                            </div>
                            <div className="a FEATURES">
                                <h1 className="aHead featureHead">Features</h1>
                                <ul className="aList featureList">
                                    <li className="ALI">A game!</li>
                                    <li className="ALI">Api calls</li>
                                    <li className="ALI">CSS animations</li>
                                    <li className="ALI">Saving data to local storage</li>
                                </ul>
                            </div>
                        </div>




                                {/* <!-- For Crescent's Arcana --> */};
                            <div className="siteDesc">
                                <div className="a MADEWITH">
                                    <h1 className="aHead MWHead">Made With</h1>
                                    <ul className="aList MWList">
                                        <li className="ALI">CSS</li>
                                        <li className="ALI">Javascript</li>
                                        <li className="ALI">Handlebars</li>
                                        <li className="ALI">Express.js</li>
                                        <li className="ALI">NodeJS</li>
                                        <li className="ALI">MongoDB</li>
                                        <li className="ALI">Mongoose</li>
                                        <li className="ALI">Passport</li>
                                        <li className="ALI">BCrypt</li>
                                    </ul>
                                </div>
                                <div className="a FEATURES">
                                    <h1 className="aHead featureHead">Features</h1>
                                    <ul className="aList featureList">
                                        <li className="ALI">Api calls to database</li>
                                        <li className="ALI">CSS animations</li>
                                        <li className="ALI">Multiple different routes/pages</li>
                                        <li className="ALI">Displaying data from a database</li>
                                        <li className="ALI">User login/registration and authentication</li>
                                        <li className="ALI">Admin login</li>
                                    </ul>
                                </div>
                            </div>


                                {/* <!-- For NPCTracker --> */};
                            <div className="siteDesc">
                                <div className="a MADEWITH">
                                    <h1 className="aHead MWHead">Made With</h1>
                                    <ul className="aList MWList">
                                        <li className="ALI">CSS</li>
                                        <li className="ALI">Javascript</li>
                                        <li className="ALI">Express.js</li>
                                        <li className="ALI">Handlebars</li>
                                        <li className="ALI">MySQL</li>
                                        <li className="ALI">Sequelize</li>
                                        <li className="ALI">BCrypt</li>
                                    </ul>
                                </div>
                                <div className="a FEATURES">
                                    <h1 className="aHead featureHead">Features</h1>
                                    <ul className="aList featureList">
                                        <li className="ALI">Api calls to database</li>
                                        <li className="ALI">CSS animations</li>
                                        <li className="ALI">Multiple different routes/pages</li>
                                        <li className="ALI">Displaying data from a database</li>
                                        <li className="ALI">User login/registration and authentication</li>
                                    </ul>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>


    <div className="PAGE page-four" id="contact">
        <div className="CONTACT">
            <h1 className="startProject">Want to start a new project?</h1>


            <div className="emailSection">
                <h2 className="tellMe">Tell me about it!</h2>

                <form action="https://formspree.io/f/xrgjakzk" method="POST" className="emailForm">
                    <div className="formGroup">
                        {/* <!-- <label for="clientName" className="label nameLabel">NAME</label> --> */};
                        <input required="true" placeholder="Enter Name..." type="text" id="input clientName" name="Name"/>
                    </div>
                    <div className="formGroup">
                        {/* <!-- <label for="clientEmail" className="label emailLabel">EMAIL</label> --> */};
                        <input required="true" placeholder="Email Address..." type="email" id="input clientEmail" name="Email"/>
                    </div>
                    <div className="formGroup">
                        {/* <!-- <label for="clientIdea" className="label ideaLabel">What's on your mind?</label> --> */};
                        <textarea required="true" rows="5" placeholder="What's on your mind?" name="Message" id="message clientIdea"></textarea>
                    </div>
                    <button className="sendIdea">Submit</button>
                </form>
            </div>
            <div className="success">Success!</div>

            <div data-visible="false" className="BT sunLoad" alt="Sun icon"></div>
        </div>
    </div>

			</>
		);
	}
}