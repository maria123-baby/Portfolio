import "./Navbar.css"
export default function Navbar(){
    return (
        <header className="header">
        <h2>My Portfolio</h2>
        <nav className="navbar" >
          <a href="/">Home</a>
          <a href="/about">About</a>
          
          <a href="/Skill">Skills</a>
          <a href="/Project">Projects</a>
          <a href="/Contact">Contact</a>
        </nav>

    </header>
    )
}