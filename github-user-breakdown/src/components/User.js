import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUserSummary, getUserDetailed } from "../actions";
import {
  XYPlot,
  LineSeries,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
  RadialChart
} from "react-vis";
import styled from "styled-components";

const myData = [{ angle: 1 }, { angle: 5 }, { angle: 2 }, { angle: 10 }];

const UserWrapper = styled.div`
  max-width: 400px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;

  img {
    max-width: 200px;
  }
`;
const Languages = styled.div`
  border: 2px solid black;
  height: 200px;
`;

const User = props => {
  const username = props.match.params.user;
  let user = props.users.filter(user => user.user === username)[0];

  useEffect(() => {
    props.getUserSummary(username);
    props.getUserDetailed(username);
  }, []);

  if (props.summary.languages) {var x = (Object.entries(props.summary.languages))}
  return (
    <>
      <UserWrapper>
        {user.user}
        <img src={user.avatar} alt="" />
      </UserWrapper>

      {/* <RadialChart data={myData} width={300} height={300} /> */}

      {props.summary.length === 0 ? (
        <div> Loading.. </div>
      ) : (
        <Languages>
          REPOS USING
          {/* <hr />
          HTML: {props.summary.languages.HTML}
          <hr />
          CSS: {props.summary.languages.CSS}
          <hr />
          JAVASCRIPT: {props.summary.languages.JavaScript} */}
          <hr/>
          {x}
        </Languages>
      )}
    </>
  );
};

const mapStateToProps = state => ({
  users: state.users,
  summary: state.userSummary,
  fetching: state.fetching,
  detailed: state.userDetailed
});

export default connect(
  mapStateToProps,
  { getUserSummary, getUserDetailed }
)(User);

// {props.users.map(user => (
//   <div>
//     {user.login}
//     <img src={user.avatar_url} alt="" />
//   </div>
// ))}
