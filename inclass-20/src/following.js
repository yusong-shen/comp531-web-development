/**
 * Created by yusong on 10/25/16.
 */
let followings = {
    followings : [
        {
            username: 'loginUser',
            following: ['ys004', 'sep1', 'unknownUser', 'blabla']
        }
    ]
}

// PUT /following/:user
const updateFollowing = (req, res) => {
    // const id = 'loginUser'
    const user = req.params.user
    followings.followings[0].following.push(user)
    res.send(followings.followings[0])
}


// DELETE /following/:user
const deleteFollowing = (req, res) => {
    // const id = 'loginUser'
    const user = req.params.user
    const prevArr = followings.followings[0].following
    followings.followings[0].following = prevArr.filter(item => item !== user)
    res.send(followings.followings[0])
}

// get the list of users being followed by the requested user
// default to logged in user
const getFollowing = (req, res) => {
    const id = req.params.user || 'loginUser'
    const result = followings.followings.filter(x => x.username === id)
    if (result.length >= 1) {
        res.send(result[0])
    } else {
        res.send(followings.followings[0])
    }
}


module.exports = (app) => {
    app.delete('/following/:user', deleteFollowing)
    app.put('/following/:user', updateFollowing)
    app.get('/following/:user*?', getFollowing)
}