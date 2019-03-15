import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { getUserData, deleteUser } from "../actions";
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";

const PageWrapper = styled.div``;

const FormWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
      border-radius: 5px;
      border: 2px solid #9f86ff;
    }
    button {
      border: 0;
      padding: 5px 0;
      font-size: 20px;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      background: #9f86ff;
      color: white;
      transition: all.5s ease;
      margin-top: 20px;
      border-radius: 5px;
      cursor: pointer;

      &:hover {
        background: #5933f0;
      }
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
  background-color: #f8f8f8;
  border-radius: 20px;
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
    border-radius: 10px;
    margin: 18px;
    font-size: 18px;
    text-decoration: none;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all .3s ease;

    &:hover {
      box-shadow: 0px 0px 50px 10px #9f86ff;
    }
  }
`;

class GithubUsers extends React.Component {
  state = {
    user: ""
  };

  deleteUser = (e, user) => {
    e.preventDefault();
    this.props.deleteUser(user);
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

        {this.props.fetching ? (<Loader type="TailSpin" color="black" height={80} width={80} />) :
        (<UserCardsContainer>
          {this.props.users.map(user => (
            <Link to={`/github-users/${user.user}`} key={user.user}>
              <UserCard>
                <button onClick={e => this.deleteUser(e, user.user)}>X</button>
                <img src={user.avatar} alt="" />
                <div> {user.user} </div>
                <div>Repo Count: {user.repo_count} </div>
              </UserCard>
            </Link>
          ))}
        </UserCardsContainer>)
        }
      </PageWrapper>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
  summary: state.userSummary,
  fetching: state.fetching
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
