import bgImage from '../../assets/4.jpg'
import  './Skill.css';
import { FaReact,FaPython, FaHtml5, FaCss3Alt} from 'react-icons/fa';
import { SiAngular, SiNodedotjs,SiMongodb, SiJavascript, SiFirebase } from 'react-icons/si';
export default function Skill(){
return (<section className="skills-section">
  
 <div className='skill-container' id="skill">
  <h2>My Skills</h2>
  <div className="skills-content">

    <div className="skill-card">
      <FaReact className="skill-icon" />
      <span>React</span>
    </div>
    <div className="skill-card">
      <SiNodedotjs className="skill-icon" />
      <span>Node</span>
    </div>
   
    <div className="skill-card">
      <SiAngular className="skill-icon" />
      <span>Angular</span>
    </div>
   <div className="skill-card">
      <FaPython className="skill-icon" />
      <span>Python</span>
    </div>

    <div className="skill-card">
      <FaHtml5 className="skill-icon" />
      <span>HTML</span>
    </div>

    <div className="skill-card">
      <FaCss3Alt className="skill-icon" />
      <span>CSS</span>
    </div>
    <div className="skill-card">
      <SiJavascript className="skill-icon" />
      <span>JavaScript</span>
    </div>
   <div className="skill-card">
      <SiMongodb className="skill-icon" />
      <span>Mongodb</span>
    </div>
    <div className="skill-card">
      <SiFirebase className="skill-icon" />
      <span>Firebase</span>
    </div>
</div>
  </div>
  
</section>
);}
   