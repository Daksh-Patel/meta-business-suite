import { Box, Typography } from "@mui/material"

import Accordians from "./accordian"
import Title from "../title"

const TodoList = () => (
  <Box width='100%' mt={4} mb={5}>
    <Title title='To do list' />

    <Typography variant='subtitle1' fontSize='16px' color='#333333'>
      Check unread messages, comments and other things that may require your
      attention.
    </Typography>

    <Accordians />
  </Box>
)

export default TodoList
