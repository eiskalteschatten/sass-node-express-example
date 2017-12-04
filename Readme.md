Example for Automatically Compiling SASS Using Node.js and Express
==================================================================

This is an example project to show how to dynamically compile SASS files on-the-fly in a Node.js application using Express.

It is tested with Node.js 8 and 9.

You can find a detailed explanation of it here: https://blog.alexseifert.com/2017/12/04/automatically-compile-sass-using-node-js-and-express/

## Setup:

All you need to do is install the dependencies:

   ```
   npm install
   ```


## Commands:

Start with the "development" environment:

   ```
   npm start
   ```

Start with the "staging" environment:

   ```
   NODE_ENV=staging npm start
   ```

Start with the "production" environment:

   ```
   NODE_ENV=production npm start
   ```