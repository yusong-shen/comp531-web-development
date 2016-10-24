/**
 * Created by yusong on 10/20/16.
 */


import React from 'react'
import {Button} from 'react-bootstrap'

const Headline = () => (
    <div>
        <div>
            <h4>User name</h4>
            <img src="https://placekitten.com/200/150?image=8" alt="image missing" />
        </div>
        <div>
            Old headline
        </div>
        <input type="text" placeholder="Input new headline..." />
        <Button bsStyle="primary">Update</Button>

    </div>

)

export default Headline