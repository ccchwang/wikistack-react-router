# Wikistack React/Redux

Hello - it's your old pal, Wikistack! The last time we met, you worked on the back-end to implement Sequelize models and then rendered them out using a templating engine (`nunjucks`).

This time, the tables have turned - you'll be working **solely** on the **front-end** to re-implement some of my basic functionality using `react`, `redux`, and `react-redux`.

## Your Starting Point
You will be given part of the original Wikistack application. At first, you will only be able to navigate between `http://localhost:3001/#/wiki` and `http://localhost:3001/#/wiki/add`, which will show a form to add new wiki pages.

To begin the project, first create a postgres database called 'wikistack-react' (`createdb wikistack-react`).
Then, `npm install` and `npm start`.

## Your Task
Your task is to make it so that when you submit a new wiki page from `/#/wiki/add`, that page will be saved in the database, and when you navigate to `/#/wiki`, you see a list of all wiki pages in the database (including any that were just added). That's the minimum goal, but this project is open-ended; add more features at will!

## Minimum Project Requirements

### User Requirements
* Navigating to `http://localhost:3001/#/wiki` should show a list of all of the wiki pages. The entries in this list **must** persist after a refresh.
* Navigating to `http://localhost:3001/#/wiki/add` should show a form to add a new wiki page
* Submitting a (validly filled out) form entry should add a new wiki page to the database
* Navigating to `http://localhost:3001/#/wiki` AFTER submitting a new wiki page should display the new wiki page in the list (WITHOUT requiring a refresh).

### Technical Requirements
* The list of wiki pages must be contained in a `redux` store
* You should use `react-redux` to connect your React components to your Redux store
* Any AJAX requests (i.e. any `axios` calls) must be in a thunk

#### Primary focus
* Understanding and getting up to speed on a small `react`/`react-router` codebase
* Creating a `redux` store from *scratch* and connecting it to React components using `react-redux`
* Handling asynchronous data flow in a React/Redux application
* Independent decision-making in implementing project features

#### Not required (but can augment at will)
* Writing express routes
* Writing sequelize models
* Implementing new Routes with `react-router`

## FAQ

### What is this for?
* This is a self-directed exercise for continuing to master React and Redux topics.
* It is also used as an assignment for some students when we wish them to demonstrate a more solid understanding of React and Redux.

### May I work with others?
Because some of your cohort-mates may be doing this as an assigned project, we ask that do this project **solo**.

### Once I complete the minimum requirements, should I continue to implement more features?
YES! We welcome and encourage you to continue to implement more features once you have finished with the minimal requirements above - it is excellent practice for the kind of work you will encounter in senior phase.

For this reason, we've kept all of the original HTML template files from wikistack in the project (in the `OLD-views` directory - feel free to use them to continue to expand your work).
