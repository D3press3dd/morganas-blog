import { Navbar } from './components/Navbar'
import { MainContent } from './components/MainContent'
import { Footer } from './components/Footer'

function App (): JSX.Element {
  return (
    <>
      <Navbar />
      <MainContent />
      <Footer/>
    </>
  )
}

export default App
