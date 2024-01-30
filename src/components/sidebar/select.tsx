import { useState } from "react"

import { MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material"

const Selecter = () => {
  const [value, setValue] = useState<string>("Sathi gaming")

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value)
  }

  return (
    <Select
      value={value}
      onChange={handleChange}
      sx={{
        ".MuiSelect-select": {
          padding: "11.5px",
          display: "flex",
          alignItems: "center",
        },
        width: "100%",
        mt: 3,
      }}
    >
      <MenuItem value='Sathi gaming'>
        <img src='images/sathigaming.png' alt='sathi-gaming' />
        <Typography
          variant='body1'
          textTransform='capitalize'
          fontSize={{ xs: "16px", md: "20px" }}
          ml={1.5}
        >
          Sathi gaming
        </Typography>
      </MenuItem>
    </Select>
  )
}

export default Selecter
