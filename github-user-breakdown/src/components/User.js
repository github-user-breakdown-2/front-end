import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUserSummary, getUserDetailed } from "../actions";
import styled from "styled-components";
import { VictoryPie } from "victory";
import Hours from "./Hours";
import Days from "./Days";
import Loader from "react-loader-spinner";
import { Link } from "react-router-dom";

const Nav = styled.div`
  background-color: #dedfe0;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;

  a {
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: #2f323a;
    transition: all 0.1s ease;
    cursor: pointer;
    margin-left: 40px;
    text-decoration: none;

    &:hover {
      color: #9f86ff;
    }
  }
`;

const PageWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Stats = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #f8f8f8;
`;

const UserWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid black;
  background-color: #dedfe0;
  img {
    margin-top: 20px;
    max-width:100px;
    max-height:100px;
    border-radius: 50%;
  }

  h2 {
    font-size: 30px
    color: black;
  }
`;
const Languages = styled.div`
  max-width: 50%;
  margin: 20px auto;
  padding: 50px;
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
    <PageWrapper>
      <UserWrapper>
        <Nav>
          <Link to="/">Logout</Link>
          <Link to="/github-users"> User Search </Link>
        </Nav>
        <img src={user.avatar} alt="" />
        <h2>{user.user}</h2>
      </UserWrapper>

      <Stats>
        {props.summary.length === 0 ? (
          <Loader type="TailSpin" color="black" height={80} width={80} />
        ) : (
          <Languages>
            <h2>Languages Used</h2>
            <hr />
            <VictoryPie
              innerRadius={100}
              width={500}
              colorScale={[
                "#9f86ff",
                "#9ca4b6",
                "#5933f0",
                "purple",
                "navy",
                "coral",
                "#fae"
              ]}
              data={data}
            />
          </Languages>
        )}
        {/*  */}
        <Languages>
          {props.detailed.length === 0 ? (
            <Loader type="TailSpin" color="black" height={80} width={80} />
          ) : (
            <Hours hours={props.detailed.hour} />
          )}
        </Languages>
        {/*  */}
        <Languages>
          {props.detailed.length === 0 ? (
            <Loader type="TailSpin" color="black" height={80} width={80} />
          ) : (
            <Days days={props.detailed.day} />
          )}
        </Languages>
      </Stats>
    </PageWrapper>
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
