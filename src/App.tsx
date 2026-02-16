import './App.css'
import { About, Contact, Experience, Header, Hero, Project, Skill } from '@/sections'
function App() {
  return (
    <div className='grid'>
      <Header />
      <Hero />
      <About />
      <Experience />
      <Project />
      <Skill />
      <Contact />
      <footer className="flex flex-col py-5 text-center text-xm tracking-wider text-muted-foreground border-t border-border animate-fade-in portfolio-width">
        <span>© 2025 - 2026</span>
        <span>Built with 💚 by <span className="text-gradient">Sameer Gururaj Mathad</span></span>
      </footer>
    </div>
  )
}

export default App
