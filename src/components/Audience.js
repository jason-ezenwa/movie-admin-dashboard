import React from "react";
import SectionTitles from "./SectionTitles";
import AudiencePieChart from "./AudiencePieChart";
import { hottestThisWeek } from "../data";

export default function Audience () {
  return (
    <>
    <SectionTitles h2="Audience" paragraph="Specific gender, age range and top locations" />
    <section className="audience-infographics" >
      <div className="audience-chart-div" >
      <SectionTitles h2="Gender" />
      <AudiencePieChart
        men={hottestThisWeek.audience.men}
        women={hottestThisWeek.audience.women}
      />
      </div>
      <div className="audience-chart-div" >
      <SectionTitles h2="Gender" />
      <AudiencePieChart
        men={hottestThisWeek.audience.men}
        women={hottestThisWeek.audience.women}
      />
      </div>
    </section>
    </>
  );
}