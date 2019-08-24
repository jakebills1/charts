import React from "react";
import PropTypes, { arrayOf, shape, string, number } from "prop-types";
const Charts = ({ charts }) => {
  Charts.propTypes = {
    charts: arrayOf(
      shape({
        name: string,
        artist: string,
        url: string,
        genre: string,
        group: string,
        playlist_id: number
      })
    )
  };
  return (
    <>
      {charts.map(chart => {
        return (
          <div>
            <p>
              {chart.name}-{chart.artist}
            </p>
            <p>{chart.genre}</p>
            <p>{chart.group}</p>
          </div>
        );
      })}
    </>
  );
};
export default Charts;
