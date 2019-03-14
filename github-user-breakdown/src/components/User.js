import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getDetailedData, getSummaryData } from '../actions'


// ************* Styled components *************


// ************* User *************

const User = props => {
    console.log(props.users);
    let login = props.match.params.user;
    let u = props.users.filter(user => user.user == login)[0];

    useEffect(() => {
        props.getDetailedData(login)
    }, [])

    return (
        <div>
            <div>
                <p>{u.user}</p>
                <p><img src={u.avatar}/></p>             
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    users: state.users,
    detailed: state.userDetailed, 
})

export default connect(
    mapStateToProps,
    { getDetailedData, getSummaryData }
)(User);