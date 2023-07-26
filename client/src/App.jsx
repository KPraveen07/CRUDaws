import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Items from './Items'
import CreateItems from './CreateItems'
import UpdateItems from './UpdateItems'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Items />}></Route>
          <Route path='/create' element={<CreateItems />}></Route>
          <Route path='/update/:id' element={<UpdateItems />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App