
import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Card from "./components/Card.jsx"

// import Product from "./assignment-1/product.jsx"
// import State from "./components/state.jsx"
// import Index from './conditional_rendering/index.jsx'
// import Onchange from './onchange/onchange.jsx'
import Index from './assignment-2/index.jsx'
import He from './assignment-2/he.jsx'
import Form from './form/form.jsx'


function App() {

  let [count, setCount] = useState(false)
  





  return (
    <>
      
      {/* {count === false ? <Index /> : <He />} */}
      <Form />


    </> 
  )
}

export default App
