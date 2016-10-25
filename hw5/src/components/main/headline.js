/**
 * Created by yusong on 10/20/16.
 */

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import {updateHeadline} from '../../actions/profileActions'
import HeadlineForm from './headlineForm'

const Headline = ({username, headline, updateHeadline}) => (
    <div>
        <div>
            <h4>{`Username : ${username}`}</h4>
            <img src="https://placekitten.com/200/150?image=8" alt="image missing" />
        </div>
        <div>
            {`Headline : ${headline}`}
        </div>
        <HeadlineForm/>

    </div>

)

Headline.protoTypes = {
    username: PropTypes.string.isRequired,
    headline: PropTypes.string.isRequired,
    updateHeadline: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
    return {
        username: state.profile.username,
        headline: state.profile.headline
    }
}

const mapDispatchToProps = (dispacth) => {
    return {
        updateHeadline: (text) => {
            dispacth(updateHeadline(text))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Headline)