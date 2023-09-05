import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { hottestThisWeek } from "../data";
import SectionTitles from "./SectionTitles";

export default function InterestTrackingInsights () {
  return (
    <>
    <SectionTitles h2="Interest Tracking Insights" paragraph="Keep track of the insights on this movie" />
    <TableContainer component={Paper} >
      <Table aria-label="simple table">
        <TableHead className="table-head">
          <TableRow className="table-row">
            <TableCell >Impressions</TableCell>
            <TableCell align="left">Shares</TableCell>
            <TableCell align="left">Likes</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow className="table-row">
              <TableCell>{hottestThisWeek.impressions}</TableCell>
              <TableCell align="left">{hottestThisWeek.shares}</TableCell>
              <TableCell align="left">{hottestThisWeek.likes}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}