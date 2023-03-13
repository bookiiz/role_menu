import React, { useState, useEffect } from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Link from '@mui/material/Link';
import { ButtonGroup } from "@mui/material";


function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('reset', 'ad', 10 ),
    createData('change', 'ad', 5 ),
    createData('unlock', 'ad', 6),
    createData('Reset', 'sap', 7),
    createData('Change', 'sap',8),
    createData('unlock', 'sap',9),
  ];

export default function Entities() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        UserGet()
    }, [])

    const UserGet = () => {
      fetch('https://www.melivecode.com/api/users')
        .then(res => res.json())
        .then(
          (result) => {
            setItems(result);
          },
        )
    }


    const entitiesDelete = id => {
      var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "id": id
});

var requestOptions = {
  method: 'DELETE',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://www.melivecode.com/api/users/delete", requestOptions)
  .then(response => response.json())
  .then(result => {
    alert(result['message'])
    if (result['status'] === 'ok'){
      UserGet()
    }
  })
  .catch(error => console.log('error', error));
    }
    

    return(
        // <div className="Entities">
        //     <h1>Entities</h1>
        // </div>
        <React.Fragment>
      <CssBaseline />
      <Container >
        <Paper sx={{p :2}}>
        <Box display="flex">
        <Box sx={{flexGrow:1}}>
            <Typography variant="h6" gutterBottom>
            intent
            </Typography>
        </Box>
            <Box>
              <Link href="create">
                <Button variant="contained">Create</Button>
              </Link>
            </Box>
        </Box>

        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {/* <TableCell>ID</TableCell> */}
            <TableCell align="right">intent</TableCell>
            <TableCell align="right">Sub intent</TableCell>
            <TableCell align="right">Point</TableCell>
            <TableCell align="right">Role</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {/* {row.id} */}
              </TableCell>
              <TableCell align="right">{row.fname}</TableCell>
              <TableCell align="right">{row.lname}</TableCell>
              <TableCell align="right">{row.username}</TableCell>
              <TableCell align="right">
                <ButtonGroup variant="outlined" aria-label="outlined button group">
                  <Button onClick={() => entitiesDelete(row.id)}>Delete</Button>
                </ButtonGroup>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

        </Paper>
      </Container>
    </React.Fragment>
    );
}