import React from "react";
import SectionTitles from "./SectionTitles";
import AudiencePieChart from "./AudiencePieChart";
import LinearProgressWithLabel from "./Popularity"
import { hottestThisWeek } from "../data";

export default function Audience () {
  const topLocations = hottestThisWeek.top_locations.map((location) => {
    return (
      <div className="top-locations-data">
        <div>{location.name}</div>
        <LinearProgressWithLabel className="top-locations-progress-value" value={location.percentage}/>
      </div>
    );
  })
  return (
    <>
    <SectionTitles h2="Audience" paragraph="Specific gender, age range and top locations" />
    <section className="audience-infographics" >
      <div className="audience-chart-div" >
      <SectionTitles h2="Gender"/>
      <AudiencePieChart
        men={hottestThisWeek.audience.men}
        women={hottestThisWeek.audience.women}
      />
      </div>
      <div className="audience-chart-div" >
        <SectionTitles h2="Top Locations"/>
        <div className="top-locations-div">
        {topLocations}
        </div>
      </div>
    </section>
    </>
  );
}