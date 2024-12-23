import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Features from "./components/Features"
import Story from "./components/Story"

// https://anime-website-react-m7ni.onrender.com/

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
    <Navbar />
      <Hero />
      <About />
      <Features />
      <Story />
    </main>    
  )
}

export default App