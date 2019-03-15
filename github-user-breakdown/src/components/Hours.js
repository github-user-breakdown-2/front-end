import React from "react";
import { VictoryChart, VictoryBar } from "victory";

const Hours = props => {
  let results = [];
  Object.entries(props.hours).map(arr =>
    results.push({ x: arr[0], y: arr[1] })
  );

  return (
    <div className="Hour">
      <h2>
        Commits per hour
      </h2>
      <hr/>
      <VictoryChart
        style={{
          axis: {
            fill: "transparent",
            stroke: "#f8f8f8",
            strokeWidth: 1
          }
        }}
        domainPadding={10}
        animate={{ duration: 2000 }}
      >
        <VictoryBar
          style={{ data: { fill: "#9f86ff", stroke: "black", strokeWidth: 2 } }}
          data={results}
          animate={{
            onExit: {
              duration: 500,
              before: () => ({ opacity: 0.3, _y: 0 })
            },
            onEnter: {
              duration: 500,
              before: () => ({ opacity: 0.3, _y: 0 }),
              after: datum => ({ opacity: 1, _y: datum._y })
            }
          }}
        />
      </VictoryChart>
    </div>
  );
};

export default Hours;
