import { useEffect, useState } from "react";
import "./App.css";
import Chart1 from "./components/chart1";
import Chart2 from "./components/chart2";
import Chart3 from "./components/chart3";
import { dataRef } from "./components/Firebase";
import { get, ref } from "firebase/database";
import { database } from "./components/firebaseconfig";

export default function App() {
  const [data, setData] = useState([]);
  // useEffect(() => {
  //   dataRef
  //     .ref()
  //     .child("data")
  //     .on("value", (data) => {
  //       const getData = Object.values(data.val());
  //       setData(getData);
  //       console.log(getData);
  //     });
  // }, []);
  useEffect(() => {
    const userRef = ref(database, "data");
    get(userRef)
      .then((sanpshot) => {
        if (sanpshot.exists()) {
          const userArray = Object.entries(sanpshot.val());
          setData(userArray);
        } else {
          console.log("No data available");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  console.log(data[1][1]);
  return (
    <>
      <div className="container">
        <header>
          <div className="navbar">
            <div className="logo">
              <p className="slogan">Trust The Power</p>
            </div>
            <div className="nav-option">
              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
        </header>
        <div className="box">
          <div className="leftpannel">
            <div className="charts">
              {data[1][1] === 0 && <Chart1 />}
              {data[1][1] === 2 && <Chart2 />}
              {data[1][1] === 1 && <Chart3 />}
            </div>
            <div className="chart-data">
              <table>
                <tr>
                  <th>WAVE</th>
                  <td>
                    <input
                      placeholder={
                        (data[1][1] === 0 && "Sine") ||
                        (data[1][1] === 2 && "Triangle") ||
                        (data[1][1] === 1 && "Square")
                      }
                    ></input>
                  </td>
                </tr>
                <tr>
                  <th>FREQ</th>
                  <td>
                    <input placeholder={data[0][1] + "KHz"}></input>
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
        </div>
        <footer>
          <div className="footer-opt">
            <div className="copyright">
              <p style={{ fontSize: "16px" }}>
                Copyright © 2020-2024 BVCOE,Inc. - All Rights Reserved.{" "}
              </p>
              <p>Made with ❤️By Shivansh, Rohit, Pranay & Sagar</p>
            </div>
            <div className="social">
              <div className="border">
                <i class="fa-brands fa-facebook"></i>
              </div>
              <div className="border">
                <i class="fa-brands fa-google"></i>
              </div>
              <div className="border">
                <i class="fa-brands fa-twitter"></i>
              </div>
              <div className="border">
                <i class="fa-brands fa-square-instagram"></i>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
