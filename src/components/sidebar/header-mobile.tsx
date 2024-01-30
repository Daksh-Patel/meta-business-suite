import { useState } from "react"

import {
  Drawer,
  IconButton,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material"
import { GiHamburgerMenu } from "react-icons/gi"
import { IoMdClose } from "react-icons/io"

import Logo from "../logo"

import SideBar from "."

const HeaderMObile = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  const theme = useTheme()

  const isMobile: boolean = useMediaQuery(theme.breakpoints.down("md"))

  return (
    <>
      <Stack
        width='100%'
        direction='row'
        alignItems='center'
        justifyContent='space-between'
        px='15px'
      >
        <Logo />

        <IconButton aria-label='menu-icon' onClick={() => setMenuOpen(true)}>
          <GiHamburgerMenu />
        </IconButton>
      </Stack>

      <Drawer
        sx={{
          "& .MuiDrawer-paper": {
            width: isMobile ? "100%" : "380px",
            boxSizing: "border-box",
            bgcolor: "#FFFFFF",
          },
        }}
        variant='persistent'
        anchor='right'
        open={menuOpen}
        onClose={() => setMenuOpen(!menuOpen)}
      >
        <IconButton
          sx={{ justifyContent: "right", width: "100%" }}
          aria-label='menu-close'
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <IoMdClose />
        </IconButton>

        <SideBar />
      </Drawer>
    </>
  )
}

export default HeaderMObile
