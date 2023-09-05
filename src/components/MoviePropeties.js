import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Tag } from 'primereact/tag';
import { hottestThisWeek } from "../data";
import SectionTitles from "./SectionTitles";

export default function MovieProperties () {
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
              <TableCell >{hottestThisWeek.category.map((category) => (
                <Tag className="tag" value={category}/>
              ))}</TableCell>
              <TableCell align="left">{hottestThisWeek.watchlists}</TableCell>
              <TableCell align="left">{hottestThisWeek.streams}</TableCell>
              <TableCell align="left">{hottestThisWeek.release_date}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}