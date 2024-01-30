import { Button, Divider, Stack } from "@mui/material"

const Profile = () => (
  <Stack direction='row' my={1}>
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
