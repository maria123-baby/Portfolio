import './Home.css';
import {FaLinkedin,FaGithub} from 'react-icons/fa';
function Home(){
    return (<>
     
    <section className="home" id="home">
        <div className="home-content">
            <h3>Hello, It's Me</h3>
            <h1>Maria Baby</h1>
            <p>I'm a web developer with expertise in building web applications.</p>
            <a href="assets/Resume.pdf" target="_blank" download className='resume-btn'>Download Resume</a>
            <div className='social-links'>
                <a href="https://github.com/maria123-baby"><FaGithub size={30}/></a>
                <a href="https://linkedin.com/in/maria-baby-mb123" target='_blank' rel="noreferrer"><FaLinkedin size={30}/></a>
            </div>

        </div>
    </section>
    </>);
}

export default Home;