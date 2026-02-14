import './App.css'
import { Header } from './components'
function App() {
  return (
    <div>
      <Header />
      <div id="hero" className='w-full h-screen'>hero</div>
      <div id="about" className='w-full h-screen'>about</div>
      <div id="experience" className='w-full h-screen'>experience</div>
      <div id="projects" className='w-full h-screen'>projects</div>
      <div id="skills" className='w-full h-screen'>skills</div>
      <div id="contact" className='w-full h-screen'>contact</div>
    </div>
  )
}

export default App
