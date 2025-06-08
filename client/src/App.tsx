
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Input from './pages/input_page'
import Output from './pages/output_page';
import Landing from './pages/landing_page';

import './App.css'

function App() {

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
