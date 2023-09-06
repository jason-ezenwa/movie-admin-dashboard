import React from "react";
import SectionTitles from "./SectionTitles";
import AudiencePieChart from "./AudiencePieChart";
import LinearProgressWithLabel from "./Popularity"
import { hottestThisWeek } from "../data";

export default function Audience () {
  const topLocations = hottestThisWeek.top_locations.map((location, idx) => {
    return (
      <div className="top-locations-data" key={idx}>
        <div>{location.name}</div>
        <LinearProgressWithLabel className="top-locations-progress-value" value={location.percentage}/>
      </div>
    );
  })
  return (
    <>
    <h2 className="audience-section-title" >Audience</h2>
    <p className="audience-section-subtitle">Specific gender, age range and top locations</p>
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