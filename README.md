In the project directory, you can run:

### Read this before going ahead

To run this project, run the following commands after reaching the destination folder

1. ### `npm install`

2. ### `npm start`

3. ### `cd server/`

4. ### `npm install`

5. ### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

A node server is built to serve the API where the mock data products.json is used as a source of truth.

PROJECT STRUCTURE (Components) -
1. Listing.js - Flow starts from here
2. Products
    ../ProductCard
    ../ProductWrapper
    ../SizeComponent

3. Error Coomponent
4. ScrollTop Component
5. NykaaLogo Component

### Test Cases for the Web Page
Description | Execution steps | Expected output|
|--- | --- | ---|
|Search Functionality |Search by exact title | Results corresponding to that title will appear|
|Error Handling while search | User enters the wrong name and tries to search | A error message will appear and all the results will appear for better user experience| 
|View Load More Functionality | Click on Load More | 8 more cards will be visible |
|Scroll To top Functionality | Click on Scroll to top | It will take the webpage to the starting point|
|UI Responsiveness | Check on different mobile devices | UI should remain stable.(color,scheme,layout wise)|


PROJECT FURTHER SCOPE -
1. This project can further be scaled by introducing the autocomplete functionality. A well-versed autocomplete API
   can be built for suggesting the relevant products to the user when the user starts typing.
2. Several Filters can be integrated depending upon the user behaviour.
