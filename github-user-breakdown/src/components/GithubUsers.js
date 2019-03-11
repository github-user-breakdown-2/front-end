import React from 'react';
import { connect } from 'react-redux'

const GithubUsers = props => {
  return (
    <div>
      {props.test}
    </div>
  )
}

const mapStateToProps = state => ({
  test: state.data
})

export default connect (mapStateToProps, {})(GithubUsers)