
// import styles from '../styles/Home.module.css'
import Header from "../src/components/Header/Header"
import Footer from "../src/components/Footer/Footer"
import Hero from "../src/components/Hero/Hero"
import About from "../src/components/About/About"
import Team from "../src/components/Team/Team"

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Team />
      <Footer />
    </div>
  )
}
