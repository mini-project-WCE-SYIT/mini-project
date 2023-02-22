import './App.css'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Procedure from './components/Procedure'
import Form from './components/Form'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route exact path='/home' element={<Procedure />} />
        <Route exact path='/form' element={<Form />} />
      </Routes>
    </BrowserRouter>
    // <TranscriptPg2/>
  )
}
export default App
