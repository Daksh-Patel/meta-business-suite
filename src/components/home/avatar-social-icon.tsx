import { Avatar, AvatarGroup, Badge, styled } from "@mui/material"

const AvatarSocialIcon = () => {
  const SmallAvatar = styled(Avatar)(() => ({
    width: 32,
    height: 32,
  }))

  return (
    <AvatarGroup
      renderSurplus={(surplus) => <span>+{surplus.toString()[0]}k</span>}
      total={2}
      sx={{
        position: "relative",
        top: "-50px",
        justifyContent: "flex-end",
      }}
    >
      <Badge
        overlap='circular'
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        badgeContent={
          <SmallAvatar alt='Remy Sharp' src='images/facebook.png' />
        }
      >
        <Avatar
          alt='Travis Howard'
          sx={{ width: 100, height: 100 }}
          src='images/sathigaming.png'
        />
      </Badge>

      <Badge
        overlap='circular'
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        badgeContent={<SmallAvatar alt='Remy Sharp' src='images/insta.png' />}
      >
        <Avatar
          alt='Travis Howard'
          sx={{ width: 100, height: 100 }}
          src='images/sathigaming.png'
        />
      </Badge>
    </AvatarGroup>
  )
}

export default AvatarSocialIcon
