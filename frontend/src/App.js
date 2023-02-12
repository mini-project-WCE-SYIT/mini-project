import './App.css'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Login from './Login'
import Procedure from './Procedure'
import TranscriptPg2 from './TranscriptPg2'
function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={ <Login />}/>
        <Route exact path="/home" element={<Procedure/>}/>
      </Routes>
      </BrowserRouter>
      // <TranscriptPg2/>
  )


}
export default App
