import './App.css'
import ContactForm from './components/ContactForm'
import ContactHeader from './components/ContactHeader'
import Navigation from './components/Navigation'

function App() {


  return (
    <>
      <Navigation/>
      <main className="main_container">
      <ContactHeader/>
      <ContactForm/>
      </main>
    </>
  )
}

export default App
