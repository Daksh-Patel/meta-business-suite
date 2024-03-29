import { useState } from "react"

import { Box, Stack } from "@mui/material"
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6"

import AudienceCard from "./audience-card"
import AvatarSocialIcon from "./avatar-social-icon"
import CreateButtonGroup from "./create-button-group"
import Profile from "./profile"
import Title from "../title"

const Home = () => {
  const [value, setValue] = useState<number>(1)

  return (
    <Stack
      width='100%'
      direction={{ xs: "column", md: "row" }}
      mt='90px'
      spacing={2}
    >
      <Box
        width={{ xs: "100%", lg: "75%" }}
        maxWidth={{ xs: "330px", sm: "720px", md: "500px", lg: "unset" }}
        sx={{
          background: "#FFFFFF",
          px: { xs: 2, md: 3.5 },
          pb: 1.5,
          borderRadius: "5px",
        }}
      >
        <AvatarSocialIcon />

        <Title title='Saathi Gaming' />

        <Profile />

        <CreateButtonGroup />
      </Box>

      <Box
        width={{ xs: "100%", md: "25%" }}
        maxWidth={{ xs: "340px", sm: "740px", md: "680px", lg: "unset" }}
        sx={{
          background: "#FFFFFF",
          p: 1,
          borderRadius: "5px",
        }}
      >
        {value === 1 && (
          <AudienceCard
            title='Audience'
            subTitle='Lifetime'
            followers='5.9K'
            text='Facebook page followers'
            setValue={setValue}
            value={value}
          />
        )}

        {value === 2 && (
          <AudienceCard
            title='Trends'
            subTitle='Last 28 days'
            followers='356K'
            text='Facebook page reach'
            percentage='35'
            icon={FaArrowTrendDown}
            color='red'
            setValue={setValue}
            value={value}
          />
        )}

        {value === 3 && (
          <AudienceCard
            title='Messaging'
            subTitle='Last 28 days'
            followers='20.9K'
            text='Replying to followers'
            percentage='35'
            icon={FaArrowTrendUp}
            color='green'
            setValue={setValue}
            value={value}
          />
        )}
      </Box>
    </Stack>
  )
}

export default Home
