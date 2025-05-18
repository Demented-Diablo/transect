// Display data obtained 

import React, {useEffect, useState} from "react";
import "./DataPage.css";

const dataSources = [
  {label: "Cocorah", caption: "Cocorah's data"},
  {label: "Beach", caption: "Beach's data"},
  {label: "Wunder", caption: "WunderWeather's data"},
  {label: "Pl@ntNet", caption: "Pl@ntNet's data"}
]

const DataPage = () => {
  const [selectedData, setSelectedData] = useState(null);
  const [showTable, setShowTable] = useState(false);

  return (
    <div>
      <h1>Data Page</h1>

      <div className="btns">
        {dataSources.map((source) => (
          <DataBtn key={source.label} label={source.label} caption={source.caption} onSelect={(caption) => {
            setSelectedData(caption);
            setShowTable(true);
          }} />
        ))}
      </div>
      {selectedData && !showTable && <p>Click a button to view data</p>}
      {showTable && selectedData && <DataTable caption={selectedData} />}
    </div> 
  );
};

const DataBtn = ({label, caption, onSelect}) => {
  return (
    <button onClick={() => onSelect(caption)} className="btn" style={{cursor: "pointer"}}>
      {label}
    </button>
  );
}; 

const DataTable = ({caption}) => {
  return (
    <div className="tableContainer">
      <table>
        <caption>{caption}</caption>
        <thead>
          <tr>
            <th>Entry 1</th>
            <th>Entry 2</th>
            <th>Entry 3</th>
            <th>Entry 4</th>
            <th>Entry 5</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DataPage;