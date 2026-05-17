import './About.css'
export default function About(){
  const scrollToAbout = () => {
  document.getElementById("about").scrollIntoView({
    behavior: "smooth"
  });
};
   return (
    <section className="about-section" id="about">
      <div className="about-container">
        <h2>About Me</h2>
        <div className="about-content">
        <p>
          Hi, I'm a computer science graduate and a passionate developer interested in building scalable applications and solving real-world problems.  I enjoy creating user-friendly applications and continuously improving my problem-solving and development skills. Currently I'm seeking for an opportunity to apply and improve my skills, learn new technologies and grow as a software engineer. 

        </p>
        </div>
        </div>
      </section>

   )
}