import { Box } from "@mui/material"

import MenuItemList from "./menu-item-list"
import { SidebarBottomPartList } from "../../configs/sidebar-bottom-part"

const SidebarBottomPart = () => (
  <Box
    sx={{
      width: "100%",
      position: "absolute",
      bottom: { xs: "-40px", sm: "-20px", md: "-50px", lg: "20px" },
    }}
  >
    <MenuItemList data={SidebarBottomPartList} />
  </Box>
)

export default SidebarBottomPart
