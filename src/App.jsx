import { BrowserRouter, Routes } from 'react-router-dom'
import { routes } from './routes/routes';
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {routes}
      </Routes>
    </BrowserRouter>
  )
}

export default App
