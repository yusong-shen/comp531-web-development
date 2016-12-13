/**
 * Created by yusong on 10/25/16.
 */


import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

const ProfileContent = ({username, avatar, zipcode, email, dob, authType}) => {
    const dobDate = new Date(dob).toLocaleDateString()
    return (
        <div>
            <h2 className="text-center">Profile</h2>
            <div>
                <h4 id="username">{`Username : ${username}`}</h4>
                <div>
                    <img src={avatar} width={300} height={300} alt="image missing" />
                </div>
            </div>
            <div>
                <h4 id="authType">{`Auth Type : ${authType}`}</h4>
            </div>
            <div>
                <h4 id="zipcode">{`Zipcode : ${zipcode}`}</h4>
            </div>
            <div>
                <h4 id="email">{`Email : ${email}`}</h4>
            </div>
            <div>
                <h4 id="dob">{`Date of birth : ${dobDate}`}</h4>
            </div>
        </div>

    )
}


ProfileContent.protoTypes = {
    username: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    zipcode: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    dob: PropTypes.number.isRequired,
}

const mapStateToProps = (state) => {
    return {
        username: state.profile.username,
        avatar: state.profile.avatar,
        email: state.profile.email,
        zipcode: state.profile.zipcode,
        dob: state.profile.dob,
        authType: state.profile.authType
    }
}

const mapDispatchToProps = null

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfileContent)
