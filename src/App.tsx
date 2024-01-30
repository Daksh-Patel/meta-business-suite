import { Stack } from "@mui/material"

import SideBar from "./components/sidebar/sidebar"
import HomePage from "./pages/home"

const App = () => (
  <Stack direction='row'>
    <SideBar />
    <HomePage />
  </Stack>
)

export default App
