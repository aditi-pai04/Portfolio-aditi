import './App.css';
import myimage from './myimage.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
function App() {
  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <div className="home">
      <div class="navigation" id="home">
      <ul>
          <li><a href="#home"><span><b>Home</b></span></a></li>
          <p class="delimiter">|</p>
          <li><a href="#projects"><span><b>Projects</b></span></a></li>
          <p class="delimiter">|</p>
          <li><a href="#experience"><span><b>Experience</b></span></a></li>
          <p class="delimiter">|</p>
          <li><a href="#contact"><span><b>Contact Me</b></span></a></li>
        </ul></div>
      <div class="name-hello">
        <div class="myname">
          <h1>Hi! I'm Aditi N Pai!</h1>
          <button onClick={() => scrollToSection('contact')}><b>Contact me!</b></button>
        </div>
      <div class="myimage"><img src={myimage} alt="Thats my image"/></div>
      
      </div>
      <div class="myabout">
        <p>I'm a student pursuing Computer Science and Engineering at R V College of Engineering, Bengaluru. A lover of art and software engineer by passion. Take a look at my projects below!!</p>
      </div>
      <div class="myprojects" id="projects">
      <h3>Projects</h3> </div>
      <div class="projectnames">
        <h4>Owner registration system</h4>
      <p class="projectinfo">A web app designed using PostgreSQL, ReactJS, NodeJS and ExpressJS, for streamlining the process of registration of vehicle owners and biometric authentication using face, fingerprint and iris data. Incorporates features like encryption and integrating different components of biometrics together for easy verification of vehicle owners for renting systems and effective vehicle tracking using GPS.</p>
      <hr></hr>
      <h4>ML based bat species identification</h4>
      <p class="projectinfo">Building a machine learning model for the identification of bat species using their echolocation calls, built specifically for identifying Indian species. Also involves building an integrated tool for bat call annotation to create a dataset of Indian bat species and their calls for use in ML.</p>
      </div>
      
      
      <div class="contactme" id="contact">
      <a class="contacticon" href="https://www.linkedin.com/in/aditi-n-pai-1b122b226/">
                <FontAwesomeIcon style={{ fontSize: '30px', marginRight: '2vw' }} icon={faLinkedin} />
            </a>
            <a class="contacticon" href="https://github.com/aditi-pai04">
                <FontAwesomeIcon style={{ fontSize: '30px', marginRight: '2vw' }}icon={faGithub} />
            </a>
            <a class="contacticon" href="mailto:aditi2003pai@gmail.com">
                <FontAwesomeIcon style={{ fontSize: '30px', marginRight: '2vw'}} icon={faEnvelope} />
            </a>
            <footer>
            <p>&copy; 2024 Aditi N Pai. All rights reserved.</p>
        </footer>
      </div>
           
    </div>
  );
}


export default App;
