import { Box, Icon, Stack, Typography } from "@mui/material"
import { IconType } from "react-icons"

import ArrowButton from "./arrow-button"
import Title from "../title"

interface AudienceCardProps {
  title: string
  subTitle: string
  followers: string
  percentage?: string
  text: string
  icon?: IconType
  color?: string
  setValue: (value: number) => void
  value: number
}

const AudienceCard = (props: AudienceCardProps) => {
  const {
    title,
    subTitle,
    text,
    followers,
    percentage,
    icon,
    color,
    setValue,
    value,
  } = props

  const handleClickForward = () => {
    if (value === 3) {
      setValue(1)
    } else {
      setValue(value + 1)
    }
  }

  const handleClickBackward = () => {
    if (value === 1) {
      setValue(3)
    } else {
      setValue(value - 1)
    }
  }

  return (
    <Box sx={{ position: "relative" }}>
      <Title title={title} />
      <Typography fontSize='20px' color='#333333'>
        {subTitle}
      </Typography>
      <Typography fontSize='16px' color='#333333'>
        {text}
      </Typography>

      <Stack direction='row' alignItems='center'>
        <img src='images/facebook.png' alt='facebook' />
        <Typography fontSize='16px' ml='4px'>
          {followers}
        </Typography>

        {icon !== undefined && (
          <Typography component='span' fontSize='16px' ml='10px' color={color}>
            {percentage}%
            <Icon
              component={icon}
              sx={{ position: "relative", top: "2px", ml: "4px" }}
            />
          </Typography>
        )}
      </Stack>

      <ArrowButton
        handleClickBackward={handleClickBackward}
        handleClickForward={handleClickForward}
      />
    </Box>
  )
}

export default AudienceCard
