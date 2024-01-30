import { Typography } from "@mui/material"

interface TitleProps {
  title: string
}
const Title = (props: TitleProps) => {
  const { title } = props

  return (
    <Typography variant='h2' fontSize='26px' fontWeight={700}>
      {title}
    </Typography>
  )
}

export default Title
