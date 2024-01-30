import { Icon, Link, Stack, Typography } from "@mui/material"
import { IconType } from "react-icons"

interface MenuItemListType {
  id: number
  href: string
  title: string
  icon: IconType
  icon2?: IconType
}

type MenuItemListProps = {
  data: MenuItemListType[]
}

const MenuItemList = (props: MenuItemListProps) => {
  const { data } = props

  return (
    <Stack mt={3.5}>
      {data.map((menu) => (
        <Link
          key={menu.id}
          href={menu.href}
          color='#333333'
          px='15px'
          py='8px'
          sx={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderRadius: "6px",
            transition: "all ease-in-out 0.3s",
            "&:hover": {
              color: "white",
              background: "#333333",
            },
          }}
        >
          <Stack direction='row' alignItems='center'>
            <Icon component={menu.icon} size='29px' />
            <Typography fontSize='16px' ml={2}>
              {menu.title}
            </Typography>
          </Stack>

          {menu.icon2 !== undefined && (
            <Icon component={menu.icon2} size='22px' />
          )}
        </Link>
      ))}
    </Stack>
  )
}

export default MenuItemList
