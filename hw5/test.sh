#!/bin/bash

# ys43test	judge-sentence-return

# POST
curl -H 'Content-Type: application/json' https://webdev-dummy.herokuapp.com/login \
    -d '{"username":"ys43test", "password":"judge-sentence-return"}' -i

# HTTP/1.1 200 OK
# Server: Cowboy
# Connection: keep-alive
# X-Powered-By: Express
# Access-Control-Allow-Origin: *
# Access-Control-Allow-Credentials: true
# Access-Control-Allow-Methods: GET, POST, PUT, DELETE
# Access-Control-Allow-Headers: Authorization, Content-Type, X-Requested-With, X-Session-Id
# Access-Control-Expose-Headers: Location, X-Session-Id
# Content-Type: application/json; charset=utf-8
# Set-Cookie: sessionId=74785; Max-Age=3600; Path=/; Expires=Mon, 24 Oct 2016 18:33:41 GMT; HttpOnly
# Set-Cookie: hash=71025794594955; Max-Age=3600; Path=/; Expires=Mon, 24 Oct 2016 18:33:41 GMT; HttpOnly
# Set-Cookie: connect.sid=s%3AQFUeGcGaCKV3QzOqRfK-IcrSOaZEQf6I.Bzx5WOzR%2Fa2SvNhiEgvDSQQ5x5wnB81qMKmVrDv6%2BDA; Path=/; HttpOnly
# Content-Length: 42
# Etag: W/"2a-m2zKa0vmkJJJpI+3INvhoQ"
# Date: Mon, 24 Oct 2016 17:33:41 GMT
# Via: 1.1 vegur

# GET
curl -H 'Content-Type: application/json' --cookie 'sessionId=74785; hash=71025794594955' \
    https://webdev-dummy.herokuapp.com/headlines

# PUT
curl -H 'Content-Type: application/json' --cookie 'sessionId=74785; hash=71025794594955' \
    https://webdev-dummy.herokuapp.com/headline -X PUT -d '{ "headline":"A new headline!" }'

curl -H 'Content-Type: application/json' --cookie 'sessionId=74785; hash=71025794594955' \
    https://webdev-dummy.herokuapp.com/sample

curl -H 'Content-Type: application/json' --cookie 'sessionId=74866; hash=71102722981158' \
    https://webdev-dummy.herokuapp.com/headline -X PUT -d '{ "headline":"A new headline!" }'
