import './App.css'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Procedure from './components/Procedure'
import Form from './components/Form'
import Fileupload from './components/Fileupload'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route exact path='/home' element={<Procedure />} />
        <Route exact path='/form' element={<Form />} />
        <Route exact path='/fileupload' element={<Fileupload />} />
      </Routes>
    </BrowserRouter>
    // <TranscriptPg2/>
  )
}
export default App
