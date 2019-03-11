import React from 'react';
import { connect } from 'react-redux';

const GithubUsers = props => {
    return (
        <div>
            <p>test</p>
        </div>
    )
};

const mapStateToProps = state => ({
    data: state.data
});

export default connect(
    mapStateToProps,
    {}
)(GithubUsers);