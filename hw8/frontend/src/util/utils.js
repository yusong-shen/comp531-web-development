/**
 * Created by yusong on 10/25/16.
 */
const isLocal = false

// export const url =  isLocal ? 'http://localhost:3000' : 'https://webdev-dummy.herokuapp.com'
export const url =  isLocal ? 'http://localhost:3000' : 'https://rb-backend-ys2016-final.herokuapp.com'

export const resource = (method, endpoint, payload, nonJson) => {
    const options =  {
        method,
        credentials: 'include',
    }
    if (!nonJson) {
        options.headers = {
            'Content-Type': 'application/json'
        }
    }
    if (payload && !nonJson) options.body = JSON.stringify(payload)
    // for form data
    if (payload && nonJson) options.body = payload

    return fetch(`${url}/${endpoint}`, options)
        .then(r => {
            if (r.status === 200) {
                return (r.headers.get('Content-Type').indexOf('json') > 0) ? r.json() : r.text()
            } else {
                // useful for debugging, but remove in production
                console.error(`${method} ${endpoint} ${r.statusText}`)
                throw new Error(r.statusText)
            }
        })
}

export default resource