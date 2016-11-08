#!/bin/bash
PORT=3000

echo "POST /register"
curl -H 'Content-Type: application/json' http://localhost:${PORT}/register -d '{ "username":"defaultUser" , "password":"foobar132", "dob":"1233", "zipcode":"77006", "email":"a@b.com" }' -i
echo ""
echo ""

echo "POST /login"
curl -H 'Content-Type: application/json' http://localhost:${PORT}/login -d '{ "username":"defaultUser" , "password":"foobar132" }' -i
echo ""
echo ""

# echo "POST /login"
# curl -H 'Content-Type: application/json' http://localhost:${PORT}/login -d '{ "username":"defaultUser" , "password":"Wrong" }' -i
# echo ""
# echo ""

# echo "POST /login"
# curl -H 'Content-Type: application/json' http://localhost:${PORT}/login -d '{ "username":"defaultUser"}' -i
# echo ""
# echo ""

echo "PUT /logout"
curl -H 'Content-Type: application/json' --cookie 'sid=600c8ba034c4ebaef4640230f35e44e2' http://localhost:${PORT}/logout -X PUT -i
echo ""
echo ""

echo "POST /register"
curl -H 'Content-Type: application/json' http://localhost:${PORT}/register -d '{ "username":"testYS01" , "password":"foobar132", "dob":"1233", "zipcode":"77006", "email":"a@b.com" }' -i
echo ""
echo ""

echo "POST /login"
curl -H 'Content-Type: application/json' http://localhost:${PORT}/login -d '{ "username":"testYS01" , "password":"foobar132" }' -i
echo ""
echo ""


echo "PUT /logout"
curl -H 'Content-Type: application/json' --cookie 'sid=95db7cb159af44d5d15a8c5215d121ce' http://localhost:${PORT}/logout -X PUT -i
echo ""
echo ""