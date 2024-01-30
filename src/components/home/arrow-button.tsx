import { ButtonGroup, Button } from "@mui/material"
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"

interface ArrowButtonProps {
  handleClickForward: () => void
  handleClickBackward: () => void
}

const ArrowButton = (props: ArrowButtonProps) => {
  const { handleClickBackward, handleClickForward } = props

  return (
    <ButtonGroup
      sx={{ position: "absolute", bottom: { xs: 0, md: "-80px" }, right: 0 }}
    >
      <Button
        variant='text'
        startIcon={<MdKeyboardArrowLeft />}
        sx={{ color: "#333333", fontSize: "29px", background: "unset" }}
        onClick={handleClickBackward}
      />

      <Button
        variant='text'
        startIcon={<MdKeyboardArrowRight />}
        sx={{ color: "#333333", fontSize: "29px", background: "unset" }}
        onClick={handleClickForward}
      />
    </ButtonGroup>
  )
}

export default ArrowButton
