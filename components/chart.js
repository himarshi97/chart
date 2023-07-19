import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Row } from "reactstrap";

import axios from "axios";
const graph = () => {
  const [issue, setissue] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.github.com/repos/octocat/hello-world/stats/participation"
      )
      .then((res) => {
        setissue(res.data);
      });
  }, []);
  console.log(issue.all);

  return (
    <>
      <Row className="graph">
        <Line
          data={{
            labels: ["week1", "week2", "week3", "week4"],
            datasets: [
              {
                label: "Total change",
                backgroundColor: "rgba(75,192,192,1)",
                borderColor: "rgba(0,0,0,1)",
                borderWidth: 2,
                data: [issue.all, issue.owner],
              },
            ],
          }}
          options={{
            title: {
              display: true,
              text: "Total Change",
              fontSize: 28,
            },
            legend: {
              display: true,
              position: "right",
            },
          }}
        />
      </Row>
    </>
  );
};

export default graph;
