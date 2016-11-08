/**
 * Created by yusong on 10/20/16.
 */

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import Following from './following'
import AddFriendForm from './addFriendForm'
import ErrorMsg from './../errorMsg'

const AllFollowings = ({followings, addFriendErr}) => (
    <div>
        <ul>
            {followings.map(following =>
                <Following
                    key={followings.indexOf(following)}
                    {...following}
                    name="follower"
                />
            )}
        </ul>
        <AddFriendForm/>
        {addFriendErr ? <ErrorMsg id="addFriendErr" strong={'Error : '} errMsg={addFriendErr} isSuccess={false}/> : null}

    </div>

)

AllFollowings.propTypes = {
    followings: PropTypes.arrayOf(PropTypes.shape({
        username: PropTypes.string.isRequired,
        headline: PropTypes.string.isRequired,
    }).isRequired).isRequired,
    addFriendErr: PropTypes.string,
}

export default connect((state) => {
        return {
            followings: state.followings.followings,
            addFriendErr: state.error.addFriendError
        }
    }, null)(AllFollowings)