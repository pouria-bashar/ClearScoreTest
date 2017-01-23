# ClearScoreTest

## Setup and running the app

In order to install and run the app:

* Run `npm install`
* Run `npm run build`
* Run `npm start` - the app is accessible on port 3000 by default (http://localhost:3000)

## Running the tests

In order to run the tests:

* `npm test`

## Choice of tech and tooling

I have used the following for the technical test:

* React for the UI components
* node.js and Express for the server
* babel for compiling the ES6 scripts into ES5
* mocha for unit testing
* chai as the expectation library for the unit tests, along with chaiAsPromised for testing of promises
* sinon for stubbing in the unit tests 

As the requirements specified, I have also used webpack for building the app, and used webpack-dev-server to develop locally.

I originally considered using Angular 2, as I haven't really looked at Angular in detail since my last role within Sky, where I used version 1.3 (due to IE8 support requirements). However, I felt thata framework such as Angular would have been overkill for the simplicity of the test, so I opted for a basic React app instead. I also felt using Flux or Redux in conjunction with React would probably have been overkill too!

I've used node.js and Express as these allowed me to get set up quicky, and (in addition to koa.js) are what I'm used to using.

Babel has been used for compiling the ES6 scripts into ES5, as this is what I use on my current project; likewise with mocha and chai!

I have used SCSS and BEM for styling, although in places (namely the text within the doughnut component) BEM could not be followed without modifying the class names the react-progressbar.js library applied to the 'Circle' component. I would probably submit a PR for the library in 'the real world' to allow this.

## React Components

The main 'container' component for the app is `ScoreIndicatorContainer` and is the root component of the application.

The `ScoreIndicatorContainer` fires the initial call to the Express server to get a credit score - I have hardcoded this to be the first score from the first object in the JSON, however it can be changed by changing the array index on line 11 of the `credit-score-service` - it then passes the score from the state down to the `ScoreIndicatorComponent`.

The `ScoreIndicatorComponent` is made up of a wrapper `CircularPanelComponent` (a simple component, styled with CSS to be a circle, that scales to whatever it's container size is), and an inner `CircularScoreIndicatorComponent`, which has a score property passed to it.

The `CircularScoreIndicatorComponent` contains a `Circle` component, which is from the library `react-progressbar.js`. The library provides multiple difference progress bars, including a circular one that fits the purpose of creating the ClearScore doughnut component. Within the `CircularScoreIndicatorComponent`, the 'progress' is calculated and passed to the `Circle` component. The colour of the progress bar and inner score text is also calculated from the passed in score.

## Browser Testing

I have tested the application in:

* Chrome v55
* Firefox v42
* Safari v10
* Safari on iOS
