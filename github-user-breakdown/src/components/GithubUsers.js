import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { getUserData, deleteUser } from "../actions";
import { Link } from "react-router-dom";

const PageWrapper = styled.div``;

const FormWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  max-width: 300px;
  margin: 20px auto;
  padding: 30px;
  border-radius: 3px;
  background-color: #f8f8f8;

  form {
    display: flex;
    flex-direction: column;

    input {
      margin: 10px 0;
      font-size: 18px;
    }

    button {
      margin: 10px 0;
      border: none;
      background-color: #9f86ff;
      cursor: pointer;
    }
  }
`;

const UserCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;

  button {
    border: none;
    background-color: #5933f0;
    color: #f8f8f8;
    cursor: pointer;
    height: 20px;
    width: 20px;
    position: relative;
    left: -75px;

    &:hover {
      background-color: red;
    }
  }

  img {
    max-width: 100px;
    border-radius: 50%;
  }
`;

const UserCardsContainer = styled.div`
  border-radius: 3px;
  margin: 10px;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;

  a {
    width: 180px;
    border: 2px solid black;
    border-radius: 10px;
    margin: 10px;
    font-size: 18px;
    text-decoration: none;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:hover {
      box-shadow: 0 2px 10px black;
    }
  }
`;

class GithubUsers extends React.Component {
  state = {
    user: ""
  };

  deleteUser = (e, id) => {
    e.preventDefault();
    this.props.deleteUser(id);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.getUserData(this.state.user);
  };

  render() {
    return (
      <PageWrapper>
        <FormWrapper>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="user"
              value={this.state.user}
              onChange={this.handleChange}
              placeholder="search for user..."
            />
            <button> search </button>
          </form>
        </FormWrapper>
        <UserCardsContainer>
          {this.props.users.map(user => (
            <Link to={`/github-users/${user.login}`} key={user.id}>
              <UserCard>
                <button onClick={e => this.deleteUser(e, user.id)}> X </button>
                <div> {user.login} </div>
                <img src={user.avatar_url} alt="" />
              </UserCard>
            </Link>
          ))}
        </UserCardsContainer>
      </PageWrapper>
    );
  }
}

const mapStateToProps = ({ users }) => ({
  users
});

export default connect(
  mapStateToProps,
  { getUserData, deleteUser }
)(GithubUsers);

// {this.props.users.map(user =>
//   user.map(u => (
//     <Link to={`/github-users/${u.login}`} key={u.id}>
//       <UserCard>
//         <button onClick={e => this.deleteUser(e, u.id)}> X </button>
//         <div> {u.login} </div>
//         <img src={u.avatar_url} alt="" />
//       </UserCard>
//     </Link>
//   ))
// )}
