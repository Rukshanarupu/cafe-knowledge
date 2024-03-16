import { useState, useEffect } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Question from './Components/Question/Question';


function App() {

  return (
    <div className="App container mx-auto px-4">
      <div>
        <Header></Header>
        <Home></Home>
        <ToastContainer></ToastContainer>
      </div>
      <div>
        <Question></Question>
      </div>
    </div>
  )
}

export default App
