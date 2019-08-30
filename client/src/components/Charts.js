import React from "react";
import { arrayOf, shape, string, number } from "prop-types";
const Charts = ({ charts }) => {
  Charts.propTypes = {
    charts: arrayOf(
      shape({
        name: string,
        artist: string,
        url: string,
        genre: string,
        group_name: string,
        playlist_id: number
      })
    )
  };
  const indexOfCharts =
    charts.length > 0 ? (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h3>Search Results:</h3>
        {charts.map(chart => {
          const url = chart.url;
          return (
            <div key={chart.id}>
              <p>
                {chart.name} - {chart.artist}
              </p>
              <p>{chart.genre}</p>
              <p>{chart.group_name}</p>
              <iframe
                src={url}
                style={{ display: "block", border: "0", overflow: "hidden" }}
                title={chart.name}
              ></iframe>
            </div>
          );
        })}
      </div>
    ) : (
      <>
        <h2>No Results Found</h2>
      </>
    );
  return indexOfCharts;
};
export default Charts;
