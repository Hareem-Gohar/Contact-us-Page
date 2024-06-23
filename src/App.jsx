import { useState } from 'react'
import './App.css'
import Navigation from './Components/Navigation/Navigation'
import ContactForm from './Components/ContactForm/ContactForm'
import ContactHeader from './Components/ContactHeader/ContactHeader'
import Button from './Components/Button/Button'

function App() {

  return (
    <>
      <Navigation />
      <main>
        <ContactHeader />
        <ContactForm />
      </main>
    </>
  )
}

export default App
