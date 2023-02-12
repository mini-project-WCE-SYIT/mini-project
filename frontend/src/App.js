import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Login'
import Procedure from './Procedure'
import Form from './Form'

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={ <Login />}/>
        <Route exact path="/home" element={<Procedure/>}/>
        <Route exact path="/form" element={<Form/>}/>
      </Routes>
      </BrowserRouter>
      // <TranscriptPg2/>
  )
}
export default App
