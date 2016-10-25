/**
 * Created by yusong on 10/25/16.
 */


import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

const ProfileContent = ({username, zipcode, email}) => (
    <div>
        <h2 className="text-center">Profile</h2>
        <div>
            <h4>{`Username : ${username}`}</h4>
            <img src="https://placekitten.com/200/150?image=8" alt="image missing" />
        </div>
        <div>
            <h4>{`Zipcode : ${zipcode}`}</h4>
        </div>
        <div>
            <h4>{`Email : ${email}`}</h4>
        </div>
    </div>

)


ProfileContent.protoTypes = {
    username: PropTypes.string.isRequired,
    zipcode: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
}

const mapStateToProps = (state) => {
    return {
        username: state.profile.username,
        email: state.profile.email,
        zipcode: state.profile.zipcode,

    }
}

const mapDispatchToProps = null

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfileContent)
