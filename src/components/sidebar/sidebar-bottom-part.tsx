import { Box } from "@mui/material"

import MenuItemList from "./menu-item-list"
import { SidebarBottomPartList } from "../../configs/sidebar-bottom-part"

const SidebarBottomPart = () => (
  <Box sx={{ width: "100%", position: "absolute", bottom: 0, left: 0 }}>
    <MenuItemList data={SidebarBottomPartList} />
  </Box>
)

export default SidebarBottomPart
