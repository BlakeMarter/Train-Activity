# __Train-Activity Train-Scheduler__

## __Table of Contents__
* Overview
* Technologies
* Local Installation

## __Overview__
Train-Scheduler allows users to calculate the arrival time from a specified location using Moment.js and add and remove those trains from their train schedule by using firebase as their database.


## __Technologies__
* Bootstrap
* jQuery
* Moment.js
* Firebase

## __Local Installation__
#### __Step 1: Git Clone__

  Clone Train-Schedule to your local git repo like the following:

  git clone https://github.com/BlakeMarter/Train-Activity.git

  The Train-Schedule project and its files should now be in your project folder.

#### __Step 2: Set up firebase__

    var config = {
        apiKey: "AIzaSyBZtrqT6iPpM1zu85jnXlyTmUuB3or_T-Y",
        authDomain: "allaboard-d06ee.firebaseapp.com",
        databaseURL: "https://allaboard-d06ee.firebaseio.com",
        projectId: "allaboard-d06ee",
        storageBucket: "allaboard-d06ee.appspot.com",
        messagingSenderId: "165785536057"
    };

    firebase.initializeApp(config);

    var database = firebase.database();

#### __Step 3: Launch app__

Open index.html file via browser (Chrome preferred)

Or visit application via https://blakemarter.github.io/Train-Activity/.