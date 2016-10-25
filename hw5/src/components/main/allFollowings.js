/**
 * Created by yusong on 10/20/16.
 */

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import Following from './following'

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
        <div>
            input a new user, add button
        </div>
    </div>

)

AllFollowings.propTypes = {
    articles: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string.isRequired,
        headline: PropTypes.string.isRequired,
    }).isRequired).isRequired,
}

export default connect((state) => {
        return {
            followings: state.followings.followings
        }
    }, null)(AllFollowings)