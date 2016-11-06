/**
 * Created by yusong on 11/5/16.
 */

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { clearError } from './../actions/action'
export const ErrorMsg = ({strong, errMsg, errReset, isSuccess})=> {
    let className = isSuccess ? "alert alert-success fade in" : "alert alert-danger fade in"
    return (
        <div className={className}>
            <a href="#" className="close" data-dismiss="alert" aria-label="close" title="close"
               onClick={(e)=> {
                   errReset()
               }}>&times;</a>
            <strong>{strong}</strong>{errMsg}
        </div>
    )
}


ErrorMsg.propTypes = {
    strong: PropTypes.string,
    isSuccess: PropTypes.bool,
    errMsg: PropTypes.string.isRequired,
    errReset: PropTypes.func.isRequired
}

export default connect(null, (dispatch)=>{
    return {
        errReset: ()=>{clearError()(dispatch)}
    }
})(ErrorMsg)