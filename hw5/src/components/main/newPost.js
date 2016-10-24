/**
 * Created by yusong on 10/20/16.
 */

import React from 'react'
import {Button} from 'react-bootstrap'

const NewPost = () => (
    <div>
        <div>
            <input type="file"/>
        </div>
        <Button bsStyle="success">Cancel</Button>
        <div>
            <textarea rows="5" id="post" placeholder="Edit your post here" />
        </div>
        <Button bsStyle="primary">Post</Button>

    </div>

)

export default NewPost