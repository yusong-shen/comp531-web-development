/**
 * Created by yusong on 10/20/16.
 */


import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {Button} from 'react-bootstrap'

const Headline = ({username, headline}) => (
    <div>
        <div>
            <h4>{`Username : ${username}`}</h4>
            <img src="https://placekitten.com/200/150?image=8" alt="image missing" />
        </div>
        <div>
            {`Headline : ${headline}`}
        </div>
        <input type="text" placeholder="Input new headline..." />
        <Button bsStyle="primary">Update</Button>

    </div>

)


Headline.protoTypes = {
    username: PropTypes.string.isRequired,
    headline: PropTypes.string.isRequired,
}

const mapStateToProps = (state) => {
    return {
        username: state.profile.username,
        headline: state.profile.headline
    }
}

const mapDispatchToProps = null

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Headline)