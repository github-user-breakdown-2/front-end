import React from "react";
import { VictoryChart, VictoryBar } from "victory";

const Days = props => {
  let results = [];
  Object.entries(props.days).map(arr => results.push({ x: arr[0], y: arr[1] }));

  return (
    <div className="Hour">
      Commits per day
      <VictoryChart domainPadding={20}>
        <VictoryBar data={results} />
      </VictoryChart>
    </div>
  );
};

export default Days;

