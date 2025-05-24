import './App.css'
import DebitCard from './components/DebitCard'
import Faq from './components/Faq'
import Feedback from './components/Feedback'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Offer from './components/Offer'
import PerfectCard from './components/PerfectCard'
import Vision from './components/Vision'

function App() {
  return (
    <>
      <main className='overflow-x-hidden'>
      <Navbar/>
      <div className='w-full max-w-[1440px] px-2.5 md:px-10 lg:px-20 xl:px-24 mx-auto py-5'>
        <div className='space-y-[80px]'>
        <Hero/>
        <Vision/>
        <Offer/>
        <DebitCard/>
        <PerfectCard/>
        <Feedback/>
        <Faq/>
        </div>
      </div>
      <Footer/>
      </main>
    </>
  )
}

export default App
