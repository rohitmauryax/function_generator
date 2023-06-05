import { useEffect, useState } from "react";
import "./App.css";
import Chart1 from "./components/chart1";
import Chart2 from "./components/chart2";
import Chart3 from "./components/chart3";
import { dataRef } from "./components/Firebase";

export default function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    dataRef
      .ref()
      .child("data")
      .on("value", (data) => {
        const getData = Object.values(data.val());
        setData(getData);
      });
  }, []);
  return (
    <>
      <div className="box">
        <div className="leftpannel">
          <div className="charts">
            {data[1]==1 &&<Chart1/>}
            {data[1]==2 &&<Chart2/>}
            {data[1]==3 &&<Chart3/>}

          </div>
          <div className="chart-data">
            <table>
              <tr>
                <th>WAVE</th>
                <td>
                  <input placeholder={(data[1]==1 &&"Sine")||(data[1]==2 &&"Triangle")||(data[1]==3 &&"Square")}></input>
                </td>
              </tr>
              <tr>
                <th>FREQ</th>
                <td>
                  <input placeholder={data[0]+"KHz"}></input>
                </td>
              </tr>
              <tr>
                <th>AMPL</th>
                <td>
                  <input placeholder="00.000V"></input>
                </td>
              </tr>
              <tr>
                <th>OFFSET</th>
                <td>
                  <input placeholder="00.000V"></input>
                </td>
              </tr>
            </table>
          </div>
          <div className="chart-div-3">
            <table>
              <tr>
                <th>PHASE</th>
                <th>
                  <input placeholder="000 degree" />
                </th>
              </tr>
            </table>
          </div>
        </div>
        {/* <div className="rightpannel">
          <div className="charts">
            <Chart3 />
          </div>
          <div className="chart-data">
            <table>
              <tr>
                <th>WAVE</th>
                <td>
                  <input placeholder="SINE"></input>
                </td>
              </tr>
              <tr>
                <th>FREQ</th>
                <td>
                  <input placeholder="01000000.000000HZ"></input>
                </td>
              </tr>
              <tr>
                <th>AMPL</th>
                <td>
                  <input placeholder="05.000V"></input>
                </td>
              </tr>
              <tr>
                <th>OFFSET</th>
                <td>
                  <input placeholder="00.000V"></input>
                </td>
              </tr>
            </table>
          </div>
          <div className="chart-div-3">
            <table>
              <tr>
                <th>PHASE</th>
                <th>
                  <input placeholder="000 degree" />
                </th>
              </tr>
            </table>
          </div>
        </div> */}
      </div>
    </>
  );
}
