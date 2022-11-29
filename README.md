# Dependencies:

The first step is to make sure you have WebDriverIO installed and correctly setted on your system.
To run them in Chrome browser make sure you have chromedriver.
To run the tests open up a terminal, navigate to the root directory of the repository and
use the command npx wdio run ./wdio.conf.js.
# Week-14
Automated tests of the login flow of four different types of users.

Locked out user: it is tested to check that a banned user can not access to the web page.
Glitched user: it is tested to check a permormance issue, this user has a timeout problem.
Problem user: it is tested to check that the images of the products are incorrect.
Standard user: it is tested to check the correct work flow of the page, this user has the optimal performance.

# Week-15
Automated tests of the purchase and contact pages flows.

Tested with the standard user logged in.
All of the buttons on the flow of purchase are tested:
-Add products
-Remove products
-Continue purchase
-Back on purchase
-Continue on purchase
-Finish purchase

Also the social media links and about us page link was tested.