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
    </div>
  )
}

export default App
