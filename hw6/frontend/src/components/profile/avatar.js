/**
 * Created by yusong on 10/20/16.
 */

import React from 'react'

export const Avatar = ({avatar}) => (
    // This is the Profile view.

    <div>
        <div className="avatar">
            <img src={avatar} width={150} height={150} alt="image missing" />
        </div>
    </div>
)

export default Avatar