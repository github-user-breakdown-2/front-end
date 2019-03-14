import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUserSummary, getUserDetailed } from "../actions";
import styled from "styled-components";
import { VictoryPie } from "victory";

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
  max-width: 80%;
  margin: 20px auto;
  padding: 50px;
`;

const User = props => {
  const username = props.match.params.user;
  let user = props.users.filter(user => user.user === username)[0];

  useEffect(() => {
    props.getUserSummary(username);
    props.getUserDetailed(username);
  }, []);

  if (props.summary.languages) {
    var languageSummary = Object.entries(props.summary.languages).map(item => {
      return item;
    });
  }

  console.log(languageSummary);

  return (
    <>
      <UserWrapper>
        {user.user}
        <img src={user.avatar} alt="" />
      </UserWrapper>

      {props.summary.length === 0 ? (
        <div> Loading.. </div>
      ) : (
        <Languages>
          Languages Used
          <hr />
          <VictoryPie
            width={500}
            colorScale={["#9f86ff", "#9ca4b6", "#5933f0", "#9ca4b6", "navy" ]}
            data={[
              { x: "HTML", y: 35 },
              { x: "CSS", y: 40 },
              { x: "JavaScript", y: 55 }
            ]}
          />
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

/* <hr />
          HTML: {props.summary.languages.HTML}
          <hr />
          CSS: {props.summary.languages.CSS}
          <hr />
          JAVASCRIPT: {props.summary.languages.JavaScript} */
