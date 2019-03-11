import React from 'react';
import { connect } from 'react-redux';

const Test = props => {
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
)(Test);