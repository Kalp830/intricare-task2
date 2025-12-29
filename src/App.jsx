
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Comparison from './components/Comparison';
import Steps from './components/Steps';
import Footer from './components/Footer';
import AutoScroll from './components/AutoScroll';
import Testimonials from './components/Testimonials';
import LeadCrmSupport from './components/LeadCrmSupport';

function App() {

  return (
    <>
      <Navbar/>
      <main>
        <Hero />
         <AutoScroll/>
        <Comparison/>
        <Steps />
        <Testimonials />
        <LeadCrmSupport/>
      </main>
      <Footer/>
    </>
  )
}

export default App
