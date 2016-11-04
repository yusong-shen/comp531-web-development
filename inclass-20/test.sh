#!/bin/bash
PORT=3000

echo "POST /login"
curl -H 'Content-Type: application/json' http://localhost:${PORT}/login -d '{ "username":"defaultUser" , "password":"SomeLongPasswordCoolStuff" }' -i
echo ""
echo ""

echo "POST /login"
curl -H 'Content-Type: application/json' http://localhost:${PORT}/login -d '{ "username":"defaultUser" , "password":"Wrong" }' -i
echo ""
echo ""

echo "POST /login"
curl -H 'Content-Type: application/json' http://localhost:${PORT}/login -d '{ "username":"defaultUser"}' -i
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

# echo "POST /register"
# curl -H 'Content-Type: application/json' http://localhost:${PORT}/login -d '{ "username":"testYS02" , "password":"foobar136", "dob":"1233", "zipcode":"77006", "email":"a@b.com" }' 
# echo ""
# echo ""

