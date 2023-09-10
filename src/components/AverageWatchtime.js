import AverageWatchtimeBarChart from "./AverageWatchtimeBarChart";

export default function AverageWatchtime() {
  return (
    <div className="average-watchtime-div">
      <h2 className="average-watchtime-section-title">Average Watchtime</h2>
      <p className="average-watchtime-section-subtitle">This tracks the average watchtime by users every month</p>
      <AverageWatchtimeBarChart/>
    </div>
  )

}