/**
 * Created by yusong on 10/20/16.
 */

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import Following from './following'
import AddFriendForm from './addFriendForm'

const AllFollowings = ({followings}) => (
    <div>
        <ul>
            {followings.map(following =>
                <Following
                    key={followings.indexOf(following)}
                    {...following}
                />
            )}
        </ul>
        <AddFriendForm/>
    </div>

)

AllFollowings.propTypes = {
    followings: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string.isRequired,
        headline: PropTypes.string.isRequired,
    }).isRequired).isRequired,
}

export default connect((state) => {
        return {
            followings: state.followings.followings
        }
    }, null)(AllFollowings)