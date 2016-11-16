/**
 * Created by yusong on 10/20/16.
 */

import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {addRemoteArticle} from '../../actions/articleActions'

export const NewPost = ({_addArticle}) => {
    let newArticle
    let fd = new FormData()
    const handleImageChange = (e) => {
        let file = e.target.files[0]
        fd.append('image', file)
    }
    const handleCancel = _ => {
        console.log('currently do nothing')
        // fd.delete('image')
    }
    const addText = (text) => {
        fd.append('text', text)
    }
    const handleSubmit = () => {
        _addArticle(fd)
    }
    return (
        <div>
            <div className="row">
                <div className="col-sm-6">
                    <input id="file-upload" type="file" accept="image/*" size={600}
                           onChange={(e) => {
                               handleImageChange(e)
                           }}/>
                    <button className="btn btn-success" onClick={() => {
                        handleCancel()
                    }}>Cancel</button>
                 </div>
                <div className="col-sm-6" >
                    <div>
                        <textarea rows="5" style={{width:'100%'}} id="post" placeholder="Edit your post here"
                                  ref={(node)=>{ newArticle = node }}/>
                    </div>
                    <button className="btn btn-primary" id="postBtn" onClick={() => {
                        console.log(newArticle.value)
                        addText(newArticle.value)
                        handleSubmit()
                        newArticle.value=""
                    }}>
                        Post
                    </button>
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
            _addArticle: (fd) => {
                return addRemoteArticle(fd)(dispatch)
            }
        }
    }
)(NewPost)