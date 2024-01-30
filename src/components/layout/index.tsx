import { ReactNode } from "react"

import { Box, Stack, useMediaQuery, useTheme } from "@mui/material"

import SideBar from "../sidebar"
import HeaderMObile from "../sidebar/header-mobile"

interface LayoutProps {
  children: ReactNode
}

const Layout = (props: LayoutProps) => {
  const { children } = props

  const theme = useTheme()

  const isMobile: boolean = useMediaQuery(theme.breakpoints.down("lg"))

  return (
    <Stack width='100%' direction={{ xs: "column", lg: "row" }}>
      {isMobile && <HeaderMObile />}

      {!isMobile && <SideBar />}

      <Box
        width={{ xs: "100%", lg: "calc(100% - 308px)" }}
        sx={{ background: "linear-gradient(129deg, #EAF7FF 0%, #FFEEFD 100%)" }}
        px={{ xs: "15px", md: "30px", xl: "85px" }}
        minHeight='100vh'
        height='100%'
        pt={4.2}
      >
        {children}
      </Box>
    </Stack>
  )
}
export default Layout
