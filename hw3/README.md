## HW3 Draft Frond-End
In this assignment you will develop the frontend design of your web application. (In a following assignment you will implement the functionality of the frontend.)

Our social networking web application will consist of three main views. When an un-logged-in user navigates to our site they will be greeted with the "landing" page, where they can log in or register a new account. This page we partially developed in the first assignment. After a user has logged in, they will be taken to the "main" page which contains the user's feed (consisting of the most recent articles by the user and the users the current user is following), a list of the users the current user is following, and a link to the "profile" page which allows a user to change their profile picture and other pertinent information. These last two pages we began developing in the second assignment.

Using raw CSS or a CSS Framework such as Bootrap, Foundation, SemanticUI, or others, beautify your web app. Your three pages should have a unified look and feel. You most certainly will want a navigation area common to your pages which will contain, for example, the currently logged in user's displayName and allow for the user to access their profile page from the main page, as well as a log out button.

We now add more features to our main page. We started with the user's feed, which is a collection of cards, each of text or both text and an image. For this assignment we no longer require the images to change and therefore do not want the pause/resume buttons. We need a button to log the user out of our application. We should be displaying the user's profile picture somewhere on the page, and in addition to this, each user will have a "status" headline. The status headline for the current user should be prominently displayed. The headline is a short one line message, such as "I'm learning JavaScript!" as opposed to an "article" which can be longer in length and include posted images. As mentioned above we will have a list of users being followed. This list will have user profile pictures, the display names (or account names) of the followed users, and the status headlines of the followed users. For now these should all be hard coded, and we only need a few examples of each (i.e., 3 or more). The goal is to get an idea of what the final working page will look like.

##Landing Page Requirements

The "landing" page is saved as index.html and was previously referred to as the "registration" page.

The page should have
Registration fields to make a new account as described in the previous assignment. After validation (ala the previous assignment), the submit button navigates to the main page (i.e., the form makes GET request)
text fields for a previously registered user to enter their account name and password (no form here)
A log in button. The button validates that there is text in the account name and password fields and then navigates to the main page. The validation is for presense of text nothing more.
Write unobtrusive JavaScript. Therefore, accompanying the html page we will have index.js which contains the JavaScript functionality needed for the landing page.

The landing page should be styled and "look good" -- your site will be visited and commented on by members of the class.

##Main Page Requirements

The "main" page is saved as main.html and contains a collection of cards. These cards will be referred to as "articles." For now we continue to use hard coded text and images for each article as we did in the previous assignment. Each card should have text or both an image and text.

In addition to a collection of cards displayed on the main page as the feed (which can be single or multi-column), there are the following requirements

- Button or link to navigate to the profile page
- Button or link to log out, which navigates to the landing page (index.html)
- Each card has text, or text and an image (images do not change periodically, no pause/resume buttons)
- There should be at least 8 cards, at least four have images.
- Each card has a button to leave a comment. But the button currently does nothing.
- Each card has a button to edit the article. But the button currently does nothing.
- A search box, which will be used to search for articles, but the box currently does nothing on user input.
- There is an area for a user to add a new article, this can be an editable div, a textarea, or some other tag. But the area currently does nothing on user input.
- There is a button to "post" the article. But the button currently does nothing.
- There is a button to "cancel" writing the new article. This button should clear the new article text.
- There is a button to upload an image (Hint: input type='file'). But the button currently does nothing after a file is chosen.
- The user's display name and profile picture are shown. These can be hard coded.
- The user's status headline is shown. The status headline can be hard coded.
- There is a button to update the user's status headline. The button should update the status headline, but on refresh there is no persistence required, i.e., it can return to the original value.
- Sidebar listing at least 3 followed users. The list should include a picture, name, and status headline for each user. These can all be hard coded.
- Text field and button to add a user to the following list. But the button currently does nothing.
- Each followed user has a button to unfollow. But the button currently does nothing.
- The main page should be styled and "look good" -- your site will be visited and commented on by members of the class.

##Profile Page Requirements

The "profile" page is where a user can update their profile picture and account information.

- The current display name, email address, phone number, date of birth, and zipcode are displayed
- There are fields to update each user piece of user information along with a field to update the user's password. Birth date can not be changed.
- Show the user's current profile picture
- There is a button to upload a new profile picture. But the button currently does nothing after a file is chosen.
- There is a button to update the user's values based on user input. The button validates each of the fields that are changed and then updates the displayed value as in the previous assignment. However, there is no notification alert.
- There is a button or link to navigate back to the main page
- The profile page should be styled and "look good" -- your site will be visited and commented on by members of the class.

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