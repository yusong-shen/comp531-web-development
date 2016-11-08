/**
 * Created by yusong on 10/20/16.
 */

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import {updateHeadline} from '../../actions/profileActions'
import HeadlineForm from './headlineForm'
import Avatar from './../profile/avatar'

const Headline = ({username, avatar, headline, updateHeadline}) => (
    <div>
        <div>
            <h4 id="username">{`Username : ${username}`}</h4>
            <Avatar avatar={avatar}/>
        </div>
        <div id="headline">
            {headline}
        </div>
        <HeadlineForm/>

    </div>

)

Headline.protoTypes = {
    username: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    headline: PropTypes.string.isRequired,
    updateHeadline: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
    return {
        username: state.profile.username,
        avatar: state.profile.avatar,
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