import "./Navbar.css"
export default function Navbar(){
    return (
        <header className="header">
        <h1>My Portfolio</h1>
        <nav className="navbar" >
          <a href="/">Home</a>
          <a href="/about">About</a>
          
          <a href="/Skill">Skill</a>
          <a href="/Project">Project</a>
        </nav>

    </header>
    )
}