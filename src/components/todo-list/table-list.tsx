import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material"

import { MessageList } from "../../configs/message-lists"

const TableList = () => (
  <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label='simple table'>
      <TableBody>
        {MessageList.map((row) => (
          <TableRow
            key={row.id}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component='th' scope='row'>
              <Box
                width='15px'
                height='15px'
                sx={{
                  backgroundColor: "#006FFF",
                  borderRadius: "100%",
                }}
              />
            </TableCell>
            <TableCell>
              <img src='images/messanger.png' alt='logo' />
            </TableCell>
            <TableCell>
              <img src='images/sathigaming.png' alt='logo' />
            </TableCell>
            <TableCell>
              <Typography fontSize='20px'>{row.name}</Typography>
            </TableCell>
            <TableCell>
              <Typography fontSize='20px'>{row.text}</Typography>
            </TableCell>
            <TableCell>
              <Typography fontSize='20px' color='#606060'>
                {row.day}
              </Typography>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
)

export default TableList
