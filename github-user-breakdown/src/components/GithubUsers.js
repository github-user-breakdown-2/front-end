import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { getUserData, deleteUser } from "../actions";
import { Link } from "react-router-dom";

const PageWrapper = styled.div``;

const H1 = styled.h1`
  font-size: 24px;
  font-weight: 300;
  letter-spacing: -.5px;
  text-align: center;
`;

const H2 = styled.h1`
  font-size: 18px;
  font-weight: 300;
  text-align: center;
  margin-bottom: 30px;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  border: 1px solid #d8dee2;
  width: 308px;
  margin: 20px auto 0 auto;

  p {
    font-size: 14px;
    font-weight: 600;
    margin: 20px 0 10px 0;
  }
  
  form {
    display: flex;
    flex-direction: column;
    width: 85%;
    
    input {
      font-size: 16px;
      border-radius: 3px;
      border: 1px solid #d1d5da;
      height: 30px;
      box-shadow: inset 0 1px 2px rgba(27,31,35,.075);

      &:focus {
        border-color: #2188ff;
        box-shadow: inset 0 1px 2px rgba(27,31,35,.075), 0 0 0 0.2em rgba(3,102,214,.3);
        outline: none;
      }
    }
    
    button {
      margin: 20px 0;
      cursor: pointer;
      height: 35px;
      border-radius: 3px;
      border: 1px solid #9882ef;
      background-image: linear-gradient(-180deg,#937af3,#7759ea 90%);
      color: white;
      font-weight: 800;
      font-size: 14px;

      &:hover {
        border: 1px solid #5738d4;
        background-image: linear-gradient(-180deg,#957aff,#6845ef 90%);
      }
    }
  }
`;

const UserCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  
  button {
    border: none;
    background-color: white;
    color: #5933f0;
    cursor: pointer;
    height: 20px;
    width: 20px;
    position: relative;
    bottom:310px;
    left: 105px;
    border-radius: 5px;
    ${'' /* box-shadow: 0 0 16px 0 rgba(0,0,0,.1); */}
    &:hover {
      background-color: #5933f0;
      color: white;
    }
  }
  
  img {
    width: 100%;
    height: auto;
  }
`;

const UserCardsContainer = styled.div`
  border-radius: 3px;
  margin: 10px;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  
  a {
    width: 250px;
    background-color: white;
    border-radius: 5px;
    font-size: 18px;
    text-decoration: none;
    color: black;
    box-shadow: 0 0 16px 0 rgba(0,0,0,.1);
    margin: 20px;
    
    &:hover {
      box-shadow: 0 8px 15px 0 rgba(0,0,0,.1);
    }
  }
`;

const User = styled.div`
  font-size: 24px;
  font-weight: 600;
  margin: 10px;
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
    this.setState({user: ''})
  };

  render() {
    return (
      <PageWrapper>
        <H1>Quickly analyze any GitHub user</H1>
        <H2>repos  ◆  languages  ◆  commits</H2>
        <FormWrapper>
          <form onSubmit={this.handleSubmit}>
          <p>Search for a GitHub User</p>
            <input
              type="text"
              name="user"
              value={this.state.user}
              onChange={this.handleChange}
              required
            />
            <button>Find user</button>
          </form>
        </FormWrapper>
        <UserCardsContainer>
          {this.props.users.map(user => (
            <Link to={`/github-users/${user.user}`} key={user.user}>
              <UserCard>
                <img src={user.avatar} alt="" />
                <User> {user.user} </User>
                <div>Repo Count: {user.repo_count} </div>
                <button onClick={e => this.deleteUser(e, user.user)}> X </button>
              </UserCard>
            </Link>
          ))}
        </UserCardsContainer>
      </PageWrapper>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
  summary: state.userSummary
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