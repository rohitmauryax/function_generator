import "./App.css";
import Charts from "./components/chart1";
import Chart from "./components/chart2";

export default function App() {
  return (
    <>
      <div className="box">
        <div className="leftpannel">
          <div className="charts">
            <Charts />
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
        </div>
        <div className="rightpannel">
          <div className="charts">
            <Chart />
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
        </div>
      </div>
    </>
  );
}
