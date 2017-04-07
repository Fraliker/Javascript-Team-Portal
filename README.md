# Sestarspdx

## By David Quisenberry

A portal for players families and coaches of the se stars little league team to develop community and manage their team.  Members will be able to see their team roster and view details of players.  Coaches will have a special view allowing them to focus on player development and gameday prep like creating a batting order and fielding positions.

Possible further development:
Track batting order and fielding positions across games to ensure each player is getting experience in different roles.

Create year end summary for each player and how they have developed as players that can be used as talking points for a pizza party at the end of the year.

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.28.3.

## Planning

See Draw.io for angular site structure https://drive.google.com/file/d/0B-6xmmuNJKLXZXdXbVlXdHBxWGM/view?usp=sharing

## Instructions before building

Clone this repo.

To clone this project successfully you will need to create your own [firebase account](https:firebase.google.com) and create a new project.  After you have created a project click on button 'add firebase to web app' from your overview screen.  This will give you your credentials you will need to put in a file called `api-keys.ts` in your `src/app` directory. See the below sample file and insert your keys where appropriate.  You will also need to update your authentication settings on the firebase project to include email and google.

src/app/api-key.ts

`export var masterFirebaseConfig = {
    apiKey: "xxxx",
    authDomain: "xxxx.firebaseapp.com",
    databaseURL: "https://xxxx.firebaseio.com",
    storageBucket: "xxxx.appspot.com",
    messagingSenderId: "xxxx"
  };`

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to GitHub Pages

Run `ng github-pages:deploy` to deploy to GitHub Pages.

## Serving from the localhost

run `ng serve` and navigate your web browser to https://localhost:4200

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
