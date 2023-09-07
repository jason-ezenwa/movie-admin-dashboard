import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Tag } from 'primereact/tag';
import SectionTitles from "./SectionTitles";

export default function MovieProperties (props) {
  const movie = props.movie;
  return (
    <>
    <SectionTitles h2="Movie Properties" paragraph="Details of our movie of the week" />
    <TableContainer component={Paper} >
      <Table aria-label="simple table">
        <TableHead className="table-head">
          <TableRow className="table-row">
            <TableCell >Category</TableCell>
            <TableCell align="left">Watchlists</TableCell>
            <TableCell align="left">Streams</TableCell>
            <TableCell align="left">Release Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow className="table-row">
              <TableCell >{movie.category.map((category, idx) => (
                <Tag className="tag" value={category} key={idx}/>
              ))}</TableCell>
              <TableCell align="left">{movie.watchlists}</TableCell>
              <TableCell align="left">{movie.streams}</TableCell>
              <TableCell align="left">{movie.release_date}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}