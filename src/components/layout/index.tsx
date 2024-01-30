import { ReactNode } from "react"

import { Box, Stack } from "@mui/material"

import SideBar from "../sidebar"

interface LayoutProps {
  children: ReactNode
}

const Layout = (props: LayoutProps) => {
  const { children } = props

  return (
    <Stack direction='row' justifyContent='flex-start'>
      <SideBar />

      <Box
        width='calc(100% - 308px)'
        sx={{ background: "linear-gradient(129deg, #EAF7FF 0%, #FFEEFD 100%)" }}
        px='85px'
        minHeight='100vh'
        pt={4.2}
      >
        {children}
      </Box>
    </Stack>
  )
}
export default Layout
