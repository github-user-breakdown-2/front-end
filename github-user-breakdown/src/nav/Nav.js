import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

// ************* Styled components *************

// main container
// const WrapperLink = styled.a`
//     font-size: '5em'
// `;

const Nav = () => {
    return (
        <div>
            <Link to='/'>Login</Link>
            <Link to='/github-users'>Github Users</Link>     
        </div>
    );
}

export default Nav;