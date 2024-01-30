import { Box, Button, Divider, useMediaQuery, useTheme } from "@mui/material"

import MenuItemList from "./menu-item-list"
import Selecter from "./select"
import SidebarBottomPart from "./sidebar-bottom-part"
import { MenuItemsList } from "../../configs/menu-item-list"
import Logo from "../logo"

const SideBar = () => {
  const theme = useTheme()
  const isMobile: boolean = useMediaQuery(theme.breakpoints.down("lg"))

  return (
    <Box
      width='100%'
      maxWidth='308px'
      minWidth='308px'
      px='10px'
      sx={{ background: "#FFFFFF" }}
    >
      <Box
        width='100%'
        maxWidth='308px'
        minWidth='308px'
        height='100vh'
        sx={{ position: "fixed", top: "10px", zIndex: 9 }}
      >
        {!isMobile && <Logo />}

        <Selecter />
        <MenuItemList data={MenuItemsList} />
        <Divider sx={{ background: "#525252", mt: 2.5, mb: 1.5 }} />
        <Button
          variant='text'
          sx={{
            fontSize: { xs: "20px", md: "26px" },
            color: "#333333",
            textTransform: "capitalize",
            "&:hover": {
              background: "transparent",
              color: "blue",
            },
          }}
        >
          Edit
        </Button>

        <SidebarBottomPart />
      </Box>
    </Box>
  )
}

export default SideBar
