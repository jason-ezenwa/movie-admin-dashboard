import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Tag } from 'primereact/tag';
import { upcomingMovies } from "../data";
import SectionTitles from "./SectionTitles";
import ViewButton from "./ViewButton";

export default function UpcomingMovies () {
  return (
    <>
    <SectionTitles h2="Upcoming movie premieres" paragraph="Keep track of the upcoming movie premieres" />
    <TableContainer component={Paper} >
      <Table aria-label="simple table">
        <TableHead className="table-head">
          <TableRow className="table-row">
            <TableCell> Name</TableCell>
            <TableCell align="left">Category</TableCell>
            <TableCell align="left">Watchlists</TableCell>
            <TableCell align="left">Owner</TableCell>
            <TableCell align="left">Premier Date</TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {upcomingMovies.map((upcomingMovie, idx) => (
            <TableRow className="table-row" key={idx}>
              <TableCell className="name-column" component="th" scope="row" style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
                <img src={`./images/${upcomingMovie.avatar}`} alt="movie avatar"/>
                {upcomingMovie.name}
              </TableCell>
              <TableCell align="left">{upcomingMovie.category.map((category, idx) => (
                <Tag className="tag" value={category} key={idx}/>
              ))}</TableCell>
              <TableCell align="left">{upcomingMovie.watchlists}</TableCell>
              <TableCell align="left">{upcomingMovie.owner}</TableCell>
              <TableCell align="left">{upcomingMovie.premier_date}</TableCell>
              <TableCell align="left"><ViewButton movieName={upcomingMovie.name}/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}