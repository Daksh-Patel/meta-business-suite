import { Box } from "@mui/material"

import AvatarSocialIcon from "../../components/home/avatar-social-icon"
import CreateButtonGroup from "../../components/home/create-button-group"
import Profile from "../../components/home/profile"
import Title from "../../components/title"
import TodoList from "../../components/todo-list"

const HomePage = () => (
  <Box
    sx={{ background: "linear-gradient(129deg, #EAF7FF 0%, #FFEEFD 100%)" }}
    width='100%'
    height='auto'
    minHeight='100vh'
    px={10.5}
    pt={4.2}
  >
    <Title title='Home' />

    <Box
      sx={{
        background: "#FFFFFF",
        px: 3.5,
        pb: 1.5,
        borderRadius: "5px",
        mt: "107px",
      }}
    >
      <AvatarSocialIcon />

      <Title title='Saathi Gaming' />

      <Profile />

      <CreateButtonGroup />
    </Box>

    <TodoList />
  </Box>
)

export default HomePage
