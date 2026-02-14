import './App.css'
import { About, Experience, Header, Hero } from '@/sections'
function App() {
  return (
    <div className='grid'>
      <Header />
      <Hero />
      <About />
      <Experience />
      <div id="projects" className='w-full h-screen'>projects</div>
      <div id="skills" className='w-full h-screen'>skills</div>
      <div id="contact" className='w-full h-screen'>contact</div>
    </div>
  )
}

export default App
