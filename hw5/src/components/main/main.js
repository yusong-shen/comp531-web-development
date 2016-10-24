/**
 * Created by yusong on 10/20/16.
 */
import React from 'react'

import NewPost from './newPost'
import Headline from './headline'
import AllFollowings from './allFollowings'
import ArticlesView from './../article/articlesView'



export const Main = () => (
    // This is the main view.
    // On this view we display the user's avatar, their headline,
    // their feed of articles (with a search fiilter),
    // and their list of followers.

    <div>

        <div className="row">
            <div className="col-sm-2">
                <img src='/img/rice-logo.jpg' width={150} height={50}/>
            </div>
            <div className="col-sm-6">
                <h4>New Post</h4>
                <NewPost/>
            </div>
            <div className="col-sm-4">
                <h4>Profile and Headline</h4>
                <Headline/>
            </div>

        </div>

        <div className="row">
            <div className="col-sm-2">
            </div>
            <div className="col-sm-6">
                <h4>Articles</h4>
                <ArticlesView/>
            </div>
            <div className="col-sm-4">
                <h4>Following Friends</h4>
                <AllFollowings/>
            </div>
        </div>

    </div>
)

export default Main