/**
 * Created by yusong on 10/20/16.
 */

//
// import React from 'react'
//
// const Comment = React.createClass({
//     render() {
//         return (
//             <div>
//                 <div>
//                     Profile, Username, commented on timestamp
//                 </div>
//                 <div>
//                     Comment content
//                 </div>
//             </div>
//         )
//     }
// })
//
//
// export default Comment



import React, { Component, PropTypes } from 'react'

const Comment = ({username, timestamp, content}) => (
        <div>
            <div>
                {`Username : ${username} commented at ${timestamp}`}
            </div>
            <p>
                {content}
            </p>
        </div>
)


Comment.protoTypes = {
    username: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
}

export default Comment