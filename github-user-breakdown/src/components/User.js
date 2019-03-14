import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUserSummary, getUserDetailed } from "../actions";
import styled from "styled-components";

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
  const { login } = props.match.params;
  let user = props.users.filter(user => user.login === login)[0];

  useEffect(() => {
    props.getUserSummary(login);
    props.getUserDetailed(login);
  }, []);

  
  
  return (
    <>
      <UserWrapper>
        {user.login}
        <img src={user.avatar_url} alt="" />
      </UserWrapper>

      {props.summary.length === 0 ? (
        <div> Loading.. </div>
      ) : (
        <Languages>
          REPOS USING
          <hr/>
          HTML: {props.summary.languages.HTML}
          <hr/>
          CSS: {props.summary.languages.CSS}
          <hr/>
          JAVASCRIPT: {props.summary.languages.JavaScript}
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
