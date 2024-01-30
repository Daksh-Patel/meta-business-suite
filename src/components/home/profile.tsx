import { Button, Divider, Stack } from "@mui/material"

const Profile = () => (
  <Stack
    direction={{ xs: "column", sm: "row" }}
    my={1}
    alignItems={{ xs: "flex-start", sm: "center" }}
  >
    <Button
      variant='text'
      sx={{
        fontSize: "18px",
        textTransform: "unset",
        p: 0,
        "&:hover": {
          background: "transparent",
        },
      }}
    >
      Manage facebook page
    </Button>
    <Divider
      orientation='vertical'
      flexItem
      sx={{ background: "#333333", mx: 1 }}
    />
    <Button
      variant='text'
      sx={{
        fontSize: "18px",
        textTransform: "unset",
        p: 0,
        "&:hover": {
          background: "transparent",
        },
      }}
    >
      Go to instagram
    </Button>
  </Stack>
)

export default Profile
