import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Tag } from 'primereact/tag';
import { trendingMovies } from "../data";
import SectionTitles from "./SectionTitles";
import ViewButton from "./ViewButton";

export default function TrendingMovies () {
  return (
    <>
    <SectionTitles h2="Trending movies" paragraph="Keep track of the trending movies on flairbox" />
    <TableContainer component={Paper} >
      <Table aria-label="simple table">
        <TableHead className="table-head">
          <TableRow className="table-row">
            <TableCell> Name</TableCell>
            <TableCell align="left">Category</TableCell>
            <TableCell align="left">Watchlists</TableCell>
            <TableCell align="left">Streams</TableCell>
            <TableCell align="left">Release Date</TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {trendingMovies.map((trendingMovie, idx) => (
            <TableRow className="table-row" key={idx}>
              <TableCell className="name-column" component="th" scope="row" style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
                <img src={`./images/${trendingMovie.avatar}`} alt="movie avatar"/>
                {trendingMovie.name}
              </TableCell>
              <TableCell align="left">{trendingMovie.category.map((category) => (
                <Tag className="tag" value={category}/>
              ))}</TableCell>
              <TableCell align="left">{trendingMovie.watchlists}</TableCell>
              <TableCell align="left">{trendingMovie.streams}</TableCell>
              <TableCell align="left">{trendingMovie.release_date}</TableCell>
              <TableCell align="left"><ViewButton movieName={trendingMovie.name}/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}