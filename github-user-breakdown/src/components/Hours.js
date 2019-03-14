import React from "react";
import {
    VictoryChart,
    VictoryBar
} from "victory";

const Hours = props => {

    let results = [];
    Object.entries(props.hours).map(arr => results.push({x: arr[0], y: arr[1]}))

    return (
        <div className="Hour">
            Commits per hour
            <VictoryChart>
                <VictoryBar
                    data={results}
                />
            </VictoryChart>
        </div>
    );
}

export default Hours;