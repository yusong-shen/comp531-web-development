/**
 * Created by yusong on 10/20/16.
 */
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import NewPost from '../article/newPost'
import Headline from './headline'
import AllFollowings from './allFollowings'
import ArticlesView from './../article/articlesView'
import ErrorMsg from './../errorMsg'


export const Main = ({headlineErr}) => (
    // This is the main view.
    // On this view we display the user's avatar, their headline,
    // their feed of articles (with a search fiilter),
    // and their list of followers.

    <div>

        <div className="container text-center">
            <div className="row">
                <div className="col-sm-8">
                    <div className="card">
                        <h4>New Post</h4>
                        <NewPost/>
                    </div>

                    <h4>Articles</h4>
                    <ArticlesView/>
                </div>
                <div className="col-sm-1"></div>
                <div className="col-sm-3">
                    <div className="card">
                        <h4>Profile and Headline</h4>
                        <Headline/>
                        {headlineErr? <ErrorMsg strong={'Update failed : '} errMsg={headlineErr} isSuccess={false}/> : null}
                    </div>
                    <div className="card">
                        <h4>Following Friends</h4>
                        <AllFollowings/>
                    </div>
                </div>
            </div>
        </div>

        <div className="container text-center">
            <div className="row">
                <div className="col-sm-8">

                </div>
                <div className="col-sm-1"></div>
                <div className="col-sm-3 card">

                </div>
            </div>
        </div>

    </div>
)



Main.prototype = {
    headlineErr: PropTypes.string,
}

export default connect((state) => {
    return {
        headlineErr: state.error.headlineError,
    }
})(Main)