# GET /headlines/:user?
# PUT /headline
# GET /email/:user?
# PUT /email
# GET /zipcode/:user? 
# PUT /zipcode
# GET /avatars/:user? 
# PUT /avatar

curl http://localhost:3000/headlines/ys004
curl -X PUT http://localhost:3000/headline -H 'Content-Type: application/json' -d '{"headline":"this"}'

curl http://localhost:3000/email/ys004
curl -X PUT http://localhost:3000/email -H 'Content-Type: application/json' -d '{"email":"bar@foo.com"}'

curl http://localhost:3000/zipcode/ys004
curl -X PUT http://localhost:3000/zipcode -H 'Content-Type: application/json' -d '{"zipcode":"10000"}'

curl http://localhost:3000/avatars/ys004
curl -X PUT http://localhost:3000/avatar -H 'Content-Type: application/json' -d '{"avatar":"foobar"}'

