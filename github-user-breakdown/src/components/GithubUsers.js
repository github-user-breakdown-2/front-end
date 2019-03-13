import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { getUserData, deleteUser } from "../actions";
import { Link } from 'react-router-dom'

const Wrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  max-width: 300px;
  margin: 20px auto;
  padding: 30px;

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

const UserCard = styled.div `
max-width: 200px;
border: 2px solid black;
border-radius: 10px;
margin: 10px;
padding: 20px;

img {
  max-width: 100px;
}

`

class GithubUsers extends React.Component {
  state = {
    user: ""
  };

  deleteUser = (e,id) => {
    e.preventDefault();
    this.props.deleteUser(id)
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.getUserData(this.state.user);
  };

  render() {
    return (
      <>
        <Wrapper>
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
        </Wrapper>
        <>
          {this.props.users.map(user =>
            user.map(u => (
              <UserCard key={u.id}>
                <button onClick={e => this.deleteUser(e, u.id)}> X </button>
                <div> {u.login} </div>
                <img src={u.avatar_url} alt="" />
              </UserCard>
            ))
          )}
        </>
      </>
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
