import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUserSummary, getUserDetailed } from "../actions";
import styled from "styled-components";
import { VictoryPie } from "victory";
import Hours from "./Hours";
import Days from "./Days";
import Loader from "react-loader-spinner";

const UserWrapper = styled.div`
  width: 100%;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid black;
  img {
    max-width: 200px;
    max-height: 200px;
    border-radius: 50%;
  }

  h2 {
    font-size: 30px
    color: #f8f8f8;
  }
`;
const Languages = styled.div`
  border: 2px solid black;
  max-width: 50%;
  margin: 20px auto;
  padding: 50px;
  background-color: #f8f8f8;
  tex-align: center;
`;


const User = props => {
  const username = props.match.params.user;
  let user = props.users.filter(user => user.user === username)[0];

  useEffect(() => {
    props.getUserSummary(username);
    props.getUserDetailed(username);
  }, []);

  if (props.summary.languages) {
    const x = Object.entries(props.summary.languages);
    var data = Object.assign(x.map(d => ({ x: d[0], y: d[1] })));
  }

  if (props.detailed.day) {
    const x = Object.entries(props.summary.languages);
    var dayData = Object.assign(x.map(d => ({ x: d[0], y: d[1] })));
    console.log(dayData);
  }

  return (
    <>
      <UserWrapper>
        <img src={user.avatar} alt="" />
        <h2>{user.user}</h2>

      </UserWrapper>

      {props.summary.length === 0 ? (
        <Loader type="TailSpin" color="black" height={80} width={80} />
      ) : (
        <Languages>
          <h2>
            Languages Used
          </h2>
          <hr />
          <VictoryPie
            innerRadius={100}
            width={500}
            colorScale={["#9f86ff", "#9ca4b6", "#5933f0", "purple", "navy", "coral", "#fae"]}
            data={data}
          />
        </Languages>
      )}
      {/*  */}
      <div>
        {props.detailed.length === 0 ? (
          <Loader type="TailSpin" color="black" height={80} width={80} />
        ) : (
          <Hours hours={props.detailed.hour} />
        )}
      </div>
      {/*  */}
      <div>
        {props.detailed.length === 0 ? (
          <Loader type="TailSpin" color="black" height={80} width={80} />
        ) : (
          <Days days={props.detailed.day} />
        )}
      </div>
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
