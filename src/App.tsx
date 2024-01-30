import { BrowserRouter, Route, Routes } from "react-router-dom"

import HomePage from "./pages/home"
import Notification from "./pages/notification"

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/notification' element={<Notification />} />
    </Routes>
  </BrowserRouter>
)

export default App
