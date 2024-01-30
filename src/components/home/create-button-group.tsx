import { Button, ButtonGroup } from "@mui/material"
import { BsFillFilePostFill } from "react-icons/bs"
import { CiCirclePlus } from "react-icons/ci"

import MoreButton from "./more-button"

const CreateButtonGroup = () => (
  <ButtonGroup>
    <Button
      variant='contained'
      sx={{
        width: "350px",
        height: "35px",
        mr: "10px",
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
        width: "200px",
        height: "35px",
        mr: "10px",
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
