# simple node bootstrap [![Build Status](https://travis-ci.org/TeemuKoivisto/simple-node-bootstrap.svg?branch=master)](https://travis-ci.org/TeemuKoivisto/simple-node-bootstrap) [![Coverage Status](https://coveralls.io/repos/github/TeemuKoivisto/simple-node-bootstrap/badge.svg?branch=master)](https://coveralls.io/github/TeemuKoivisto/simple-node-bootstrap?branch=master)
Simple Node.js bootstrap with Express and ES6 / ES2015. [Heroku deployment](https://simple-node-bootstrap.herokuapp.com)

# General
This is the backend version of the Angular bootstrap that I made. Something to guide you out when creating your backend and not sure how to do it. It's simple as the title says and it's mostly a recollection of things that I've learned and seen to be useful.

# How to install
1. Install Node.js and nvm if you don't have them by now. Newest versions suit very well. 4.-something if you want the production-stable version.
2. Clone this repository and go to the root and enter ```npm i``` or ```npm install```.
3. This app uses dotenv for storing environment variables, rename the ```.dev-env``` file in the root of this folder to ```.env``` and anytime you want to use Travis or Heroku remember to add your variables to their config. Or for your own server create your own production ```.env```.
4. PostgreSQL or MongoDB
4. For better development experience it's recommended to use Postman for generating requests to your app. [Here's a link to Chrome. plugin](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop) For making requests you should set your content-type to application/json and if you have authentication enabled remember to add X-Access-Token -header.
5. Now you're all set, enter ```npm start``` to run the development server.
6. Go to localhost:3332 if you want to see the backend running. Not much to look at though.
