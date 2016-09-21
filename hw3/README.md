## HW3 Draft Frond-End
Author : Yusong Shen

Visite here : https://ricebook-ys2016.surge.sh

##Landing Page Requirements

The "landing" page is saved as index.html and was previously referred to as the "registration" page.

##Main Page Requirements

The "main" page is saved as main.html and contains a collection of cards. These cards will be referred to as "articles." For now we continue to use hard coded text and images for each article as we did in the previous assignment. Each card should have text or both an image and text.

##Profile Page Requirements

The "profile" page is where a user can update their profile picture and account information.


##Example

Here's a wireframe for a site that satisfies the above requirements. Remember this is just an example, your solution does not need to look like this one.

##Publication

In adition to submitting your repo for grading, for your site to be reviewed by other members of the class you will need to publish it. We will be using Surge for hosting our web applications (it's free).

We will use npm tooling for accessing surge (although you can upload directly as well). Here’s an example package: surge-example.zip which is hosted at http://chivalrous-credit.surge.sh/. Download the zip and unpack it. Then:
```
# get surge installed
npm install

# host your files locally
npm start

# deploy to surge
npm run deploy
```
Verify the look and feel and functionality of your site as hosted on Surge. Be sure to update your site on Surge as the final step of your submission. You should not further update your Surge deployment after you have submitted your assignment. Note that if your site is not available when students go to review it then you will not receive any feedback.

Again, the purpose of this assignment is to consolidate the layout, look, and feel of the three pages of our web application. Other than simple navigation and some validation which was mostly completed previously, there is no actual functionality to much of the site.

##What to submit

Include in your hw3 submission a file named README.json that has the following contents (replaced with *your* values of course)
```
{ 
     "netid": "sep1",
  "frontend": "https://ricebook.surge.sh"
}
```
Again we write unobtrusive JavaScript and CSS. Your submission directory should look like this (no .git directory and no node_modules directory)