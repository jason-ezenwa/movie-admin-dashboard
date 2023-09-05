import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import LinearProgressWithLabel from "./Popularity"
import { Tag } from 'primereact/tag';
import { allMovies } from "../data";
import SectionTitles from "./SectionTitles";

export default function EveryMovie () {
  const allMoviesSorted = allMovies.sort((a, b) => {
    // sorts the movies array by alphabetical order
    return a.name.localeCompare(b.name)
  });
  return (
    <>
    <SectionTitles h2="Collection of all movies" paragraph="Keep track of all the movies on flairbox" />
    <TableContainer component={Paper} >
      <Table aria-label="simple table">
        <TableHead className="table-head">
          <TableRow className="table-row">
            <TableCell> Name</TableCell>
            <TableCell align="left">Category</TableCell>
            <TableCell align="left">Popularity</TableCell>
            <TableCell align="left">Watchlists</TableCell>
            <TableCell align="left">Streams</TableCell>
            <TableCell align="left">Release Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allMoviesSorted.map((movie, idx) => (
            <TableRow className="table-row" key={idx}>
              <TableCell className="name-column" component="th" scope="row" style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
                <img src={`./images/${movie.avatar}`} alt="movie avatar"/>
                {movie.name}
              </TableCell>
              <TableCell align="left">{movie.category.map((category) => (
                <Tag className="tag" value={category}/>
              ))}</TableCell>
              <TableCell align="left"><LinearProgressWithLabel value={movie.popularity} /></TableCell>
              <TableCell align="left">{movie.watchlists}</TableCell>
              <TableCell align="left">{movie.streams}</TableCell>
              <TableCell align="left">{movie.release_date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}