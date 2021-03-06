/**
 * Created by yusong on 10/20/16.
 */

import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {Button} from 'react-bootstrap'
import {addArticle} from '../../actions/articleActions'

export const NewPost = ({_addArticle}) => {
    let newArticle
    return (
        <div>
            <div className="row">
                <div className="col-sm-6">
                    <input id="file-upload" type="file"/>
                    <Button bsStyle="success">Cancel</Button>
                </div>
                <div className="col-sm-6" >
                    <div>
                        <textarea rows="5" style={{width:'100%'}} id="post" placeholder="Edit your post here"
                                  ref={(node)=>{ newArticle = node }}/>
                    </div>
                    <Button bsStyle="primary" onClick={() => {
                        console.log(newArticle.value)
                        newArticle.value=""
                    }}>
                        Post
                    </Button>
                </div>
            </div>
        </div>

    )
}

NewPost.propTypes = {
    _addArticle: PropTypes.func.isRequired
}


export default connect(
    null,
    (dispatch) => {
        return {
            _addArticle: (text) => {
                addArticle(text)(dispatch)
            }
        }
    }
)(NewPost)