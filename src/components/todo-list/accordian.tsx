import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Stack,
} from "@mui/material"
import { FaAngleDown } from "react-icons/fa"

import TableList from "./table-list"
import Title from "../title"

const Accordians = () => (
  <Box width='100%' mt='43px'>
    <Accordion>
      <AccordionSummary
        expandIcon={<FaAngleDown />}
        aria-controls='panel1-content'
        id='panel1-header'
      >
        <Stack
          width='100%'
          direction='row'
          justifyContent='space-between'
          alignItems='center'
        >
          <Title title='Messages' />
          <Button
            variant='text'
            sx={{ textTransform: "unset", fontSize: "22px", color: "#1877F2" }}
          >
            See All
          </Button>
        </Stack>
      </AccordionSummary>
      <AccordionDetails>
        <TableList />
      </AccordionDetails>
    </Accordion>

    <Accordion>
      <AccordionSummary
        expandIcon={<FaAngleDown />}
        aria-controls='panel2-content'
        id='panel2-header'
      >
        <Title title='comments' />
      </AccordionSummary>
      <AccordionDetails>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
      </AccordionDetails>
    </Accordion>
  </Box>
)

export default Accordians
