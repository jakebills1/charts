import React, { useState } from "react";
import { arrayOf, shape, string, number } from "prop-types";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
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
  const [pageNumber, setPageNumber] = useState(1);
  const [numPages, setNumPages] = useState(null);
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };
  const nextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    } else {
      setPageNumber(1);
    }
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
              <div>
                <Document
                  file={url}
                  onLoadSuccess={onDocumentLoadSuccess}
                  onClick={nextPage}
                >
                  <Page pageNumber={pageNumber} />
                </Document>
                <p>
                  Page {pageNumber} of {numPages}
                </p>
              </div>
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
