echo "POST /register"
curl -H 'Content-Type: application/json' https://webdev-dummy.herokuapp.com/register -d '{ "username":"testYS01" , "password":"foobar132", "dob":"1233", "zipcode":"77006", "email":"a@b.com" }' -i
echo ""