/**
 * Created by yusong on 10/20/16.
 */

import React from 'react'
import {Button} from 'react-bootstrap'

const NewPost = () => (
    <div>
        <div className="row">
            <div className="col-sm-6">
                <input id="file-upload" type="file"/>
                <Button bsStyle="success">Cancel</Button>
            </div>
            <div className="col-sm-6" >
                <div>
                    <textarea rows="5" style={{width:'100%'}} id="post" placeholder="Edit your post here" />
                </div>
                <Button bsStyle="primary">Post</Button>
            </div>
        </div>
    </div>

)

export default NewPost