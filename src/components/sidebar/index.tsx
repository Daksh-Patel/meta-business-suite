import { Box, Button, Divider } from "@mui/material"

import MenuItemList from "./menu-item-list"
import Selecter from "./select"
import SidebarBottomPart from "./sidebar-bottom-part"
import { MenuItemsList } from "../../configs/menu-item-list"
import Logo from "../logo/logo"

const SideBar = () => (
  <Box width='100%' maxWidth='308px' px='10px' sx={{ background: "#FFFFFF" }}>
    <Box
      maxWidth='308px'
      minWidth='308px'
      height='100vh'
      sx={{ position: "fixed", top: "10px", zIndex: 9 }}
    >
      <Logo />
      <Selecter />
      <MenuItemList data={MenuItemsList} />
      <Divider sx={{ background: "#525252", mt: 2.5, mb: 1.5 }} />
      <Button
        variant='text'
        sx={{
          fontSize: "26px",
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

export default SideBar
