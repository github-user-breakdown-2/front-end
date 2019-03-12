import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

// ************* Styled components *************




// ************* Github users page *************

class GithubUsers extends React.Component {
    state = {
        user: '',
        users: [],
    }
    
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })      
    };

    render() {
        return (
            <div>
                <form>
                    <input 
                        type='text'
                        name='user'
                        value={this.state.user}
                        onChange={this.handleChange}
                        placeholder='Github User'
                    />
                    <button>Search</button>
                </form>
                <div>
                    {this.props.users.map(user => (
                        <div>
                            <p>{user.user}</p>
                            <p><img src={user.avatar}/></p>
                            <p>{user.repo_count}</p>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
};

const mapStateToProps = state => ({
    users: state.users
});

export default connect(
    mapStateToProps,
    {}
)(GithubUsers);