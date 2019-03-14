import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getSummaryData, deleteUser } from '../actions'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import User from './User'

// ************* Styled components *************
const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const UserInput = styled.input`
    border: 1px solid #d1d5da;
    border-radius: 3px;
    box-shadow: inset 0 1px 2px rgba(27,31,35,.075);
    color: #24292e;
    padding: 6px 8px;
    width: 300px;
    height: 35px;
    &::-webkit-input-placeholder {
        color: #bfbfbf;
        font-size: 1.4em;
        font-weight: 400;
    }
`;

const ButtonInput = styled.button`
    border: 1px solid #d1d5da;
    border-radius: 3px;
    box-shadow: inset 0 1px 2px rgba(27,31,35,.075);
    color: #24292e;
    padding: 6px 8px;
    width: 100px;
    height: 35px;
    margin-left: 5px;
`;

const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const UserCard = styled.div`
    ${'' /* #d1d5da; */}
    box-shadow: 0 0 16px 0 rgba(0,0,0,.1);
    border-radius: 3px;
    box-shadow: inset 0 1px 2px rgba(27,31,35,.075);
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
    margin: 10px
    width: 250px;
    height: auto;

    img {
        display: flex;
        justify-content: center;
        width: 100%;
        height: auto;
    }

    button {
        border: 1px solid red;
        postition: fixed;
    }
`;


// ************* Github users page *************

class GithubUsers extends React.Component {
    state = {
        user: '',
    }
    
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })      
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.getSummaryData(this.state.user)
    };

    deleteUser = (e, user) => {
        e.preventDefault();
        this.props.deleteUser(user)
    }

    render() {
        return (
            <MainContainer>
                <form onSubmit={this.handleSubmit}>
                    <UserInput 
                        type='text'
                        name='user'
                        value={this.state.user}
                        onChange={this.handleChange}
                        placeholder='Enter a user...'
                    />
                    <ButtonInput>Search</ButtonInput>
                </form>
                <CardContainer>
                    {this.props.users.map(u => (
                        <Link to={`/github-users/${u.user}`}>
                            <UserCard>
                                <img src={u.avatar}/>
                                <h3>{u.user}</h3>
                                <p>Repo Count: {u.repo_count}</p>
                                <button onClick={e => this.deleteUser(e, u.user)}>X</button>
                            </UserCard>
                        </Link>
                    )
                    )}
                </CardContainer>
            </MainContainer>
        )
    }
};

const mapStateToProps = state => ({
    users: state.users
});

export default connect(
    mapStateToProps,
    { getSummaryData, deleteUser }
)(GithubUsers);