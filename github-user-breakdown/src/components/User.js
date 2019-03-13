import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUserSummary } from "../actions";
import styled from "styled-components";

const UserWrapper = styled.div `
  max-width: 400px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;

  img {
    max-width: 200px;
  }
`

const User = props => {
  let login = props.match.params.login;
  let user = props.users.filter(user => user.login === login)[0];

  useEffect(() => {
    props.getUserSummary(login)
  }, []);

  return (
    <UserWrapper>
      {user.login}
      <img src={user.avatar_url} alt="" />
    </UserWrapper>
  );
};

const mapStateToProps = state => ({
  users: state.users
});

export default connect(
  mapStateToProps,
  { getUserSummary }
)(User);

// {props.users.map(user => (
//   <div>
//     {user.login}
//     <img src={user.avatar_url} alt="" />
//   </div>
// ))}
