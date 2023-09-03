import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Tag } from 'primereact/tag';
import { upcomingMovies } from "./data";

export default function UpcomingMovies () {
  return (
    <TableContainer component={Paper} >
      <Table aria-label="simple table">
        <TableHead className="table-head">
          <TableRow className="table-row">
            <TableCell> Name</TableCell>
            <TableCell align="left">Category</TableCell>
            <TableCell align="left">Watchlists</TableCell>
            <TableCell align="left">Owner</TableCell>
            <TableCell align="left">Premier Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {upcomingMovies.map((upcomingMovie, idx) => (
            <TableRow className="table-row" key={idx}>
              <TableCell component="th" scope="row">
                {upcomingMovie.name}
              </TableCell>
              <TableCell align="left">{upcomingMovie.category.map((category) => (
                <Tag className="tag" value={category}/>
              ))}</TableCell>
              <TableCell align="left">{upcomingMovie.watchlists}</TableCell>
              <TableCell align="left">{upcomingMovie.owner}</TableCell>
              <TableCell align="left">{upcomingMovie.premier_date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}