import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import viteLogo from '/vite.svg'
import Input from './pages/input_page'
import Output from './pages/output_page';
import Landing from './pages/landing_page';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Router>
      <Routes>
        <Route path="/input" element={<Input />} />
        <Route path="/output" element={<Output />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </Router>
      {/* <Input /> */}
    </>
  )
}

export default App
