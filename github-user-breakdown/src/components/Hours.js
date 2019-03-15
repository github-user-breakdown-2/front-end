import React from "react";
import { VictoryChart, VictoryBar, VictoryTheme } from "victory";

const Hours = props => {
  let results = [];
  Object.entries(props.hours).map(arr =>
    results.push({ x: arr[0], y: arr[1] })
  );

  return (
    <div className="Hour">
      Commits per hour
      <VictoryChart 
      domainPadding={10}
      	animate={{ duration: 2000 }}
          >
      
        <VictoryBar 
        style={{
            data: { fill: "#f8f8f8", width: 12 }
          }}
        data={results}
        animate={{
            onExit: {
              duration: 500,
              before: () => ({ opacity: 0.3, _y: 0 })
            },
            onEnter: {
              duration: 500,
              before: () => ({ opacity: 0.3, _y: 0 }),
              after: (datum) => ({ opacity: 1, _y: datum._y })
            }
          }}
         />
      </VictoryChart>
    </div>
  );
};

export default Hours;
