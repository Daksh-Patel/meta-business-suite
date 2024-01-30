import { Button, ButtonGroup } from "@mui/material"
import { BsFillFilePostFill } from "react-icons/bs"
import { CiCirclePlus } from "react-icons/ci"

import MoreButton from "./more-button"

const CreateButtonGroup = () => (
  <ButtonGroup fullWidth sx={{ flexDirection: { xs: "column", md: "row" } }}>
    <Button
      variant='contained'
      sx={{
        width: { xs: "100%", md: "350px" },
        height: "35px",
        mr: { xs: 0, md: "10px" },
        mb: { xs: "10px", md: 0 },
        textTransform: "unset",
        boxShadow: "unset",
      }}
      startIcon={<BsFillFilePostFill />}
    >
      Create post
    </Button>

    <Button
      variant='contained'
      sx={{
        width: { xs: "100%", md: "200px" },
        height: "35px",
        mr: { xs: 0, md: "10px" },
        mb: { xs: "10px", md: 0 },
        background: "#F7F7F7",
        color: "black",
        textTransform: "unset",
        boxShadow: "unset",
      }}
      startIcon={<CiCirclePlus />}
    >
      Create story
    </Button>

    <MoreButton />
  </ButtonGroup>
)

export default CreateButtonGroup
