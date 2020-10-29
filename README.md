# Commentary
While deciding on how to cut my components and how to achieve the objectives listed i took inspiration from your
[Website](https://www.frichti.co/) and decided to solve the user stories the same way you guys did it.
## 1. As a user I need to search a product through the menu:
I created a search bar component with a dropdown, the search bar dispatches an event to search for elements
starting with the user input and push them in a list in the store instead of filtering the main item list
cause as i saw on your website, the search functionnality is meant to help users add items directly into their basket.
## 2. As a user I need to have a responsive/adaptive interface that is usable in web-mobile:
for the responsive user story i tried to keep it simple since the layout is pretty minimal.
just some breakpoints and flexible widths. Here too, itook inspiration from your website.
## 3. As a user I need to filter the products according to certain allergens:
In this user story i kept with the trend of following what you guys did. i created a button on the sidebar that displays
a modal with a list of the allergens but i couldn't group the allergens together like you guys did cause that needs an
external classifier. I filter the list of elements through the helper i created (explanation in the function)

# Tools added and tools not used

1. added [Immer](https://immerjs.github.io/immer/docs/introduction) to simplify the store handling and make
the reducer functions more readable and easier to debug.


2.I added uuid to use as key property for the list of allergens since the allergens array is just an array of string
and it's not best practice to use index for the key.


3. I didn't use Redux Thunk for a couple of reasons. I didn't think it's going to add alot of value to the project
here and if i was going to use a side effect handler, i prefer Redux-Saga (more control) and finally
for the main reason is lack of time


# General Commentary

The main instructions were straight forward and relatively easy to implement with the right tools
([Immer](https://immerjs.github.io/immer/docs/introduction))
I spent most of the time on the design part and making everything look similar to what you guys made already.



#Frichti Front-End Exercise
Frichti is a tech company that requires to automate the food creation, sales and delivery. Each step of the food workflow, from our FoodLab to consumer, requires the right business logic and technical processes to ensure scalability and performance.

## Objective

This exercise aims to:

1. Test your engineering skills ;
2. Give you the opportunity to play with our stack and our business processes.

Below you will find the instructions of this exercise.

## Before beginning

Keep in mind that:

- You do not have to find the right solution, we are interested in the way you'll conceive your program.
- You do not have to write code out of the `/src` folder, nevertheless you can if you think it's necessary.
- You should give the exercise a limited amount of time: **2 to 3 hours** would be good enough (you have one week maximum to return the assignment).
- Keep in mind your code quality will be appreciated.

## Environment

### Engines versions

- [Node](https://nodejs.org/en/): **12.16.2** (`node -v`)
- [npm](https://www.npmjs.com/): **6.14.4** (`npm -v`)

### Installation

```sh
npm install
npm start
```

### Scripts

You will need to use [npm](https://www.npmjs.com/) scripts to run, test and build this application. Please, find a full description of available scripts [here](./doc/scripts.md).

### Presets

#### Environment

This exercise **must be done in [ReactJS](https://reactjs.org/)**, it's already set-up for you.

#### Tools and libraries

The following tools and libraries are already set-up for you:

- [Styled-Components](https://styled-components.com/): a CSS-in-JS solution
- [React Router](https://reacttraining.com/react-router/web/guides/quick-start): a routing solution
- [StorybookJS](https://storybook.js.org): a user interface development environment and playground for UI components
- [Jest](https://jestjs.io/): a testing framework
- [Testing-Library/React](https://github.com/testing-library/react-testing-library): a testing utility (+ [Jest matchers](https://github.com/testing-library/jest-dom))
- [Enzyme](https://airbnb.io/enzyme/): a testing utility
- [ESLint](https://eslint.org/): a JavaScript linter (with [React plugin](https://www.npmjs.com/package/eslint-plugin-react) and [Airbnb config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb))
- [Stylelint](https://stylelint.io/): a styles linter (with [SASS](https://www.npmjs.com/package/stylelint-scss) and [BEM](https://github.com/simonsmith/stylelint-selector-bem-pattern) plugins)
- [Redux](https://redux.js.org/): a global state manager (with [react-redux](https://redux.js.org/basics/usage-with-react) and [redux-thunk](https://github.com/reduxjs/redux-thunk))

**For information, the technical choices here are done just in order to help you having a full configured project, feel free to choose or change any library (except for React of course).**

## Instructions

### User stories

Please, read the following user stories:

1. As a user I need to search a product through the menu.
2. As a user I need to have a responsive/adaptive interface that is usable in web-mobile.
3. As a user I need to filter the products according to certain allergens.

### Exercise

There are some comments in this exercise with the annotation `@todo`. These comments will point to the code you need to write to complete the user stories. Feel free to create files and folders if needed, but some files have already been initialized for you.

The definition of done for a user story is:

- [x] Feature works ;
- [x] Coding style is correct (ESLint, Stylelint, etc.) ;
- [x] Tests have been written (Jest, Storybook, etc.).

⚠️ You need to **complete at least 2 user stories** in a **maximum of 3 hours** (you have at most one week to return the assignment if you want to complete all).

## Notes

### General

- You can use third-party libraries but you can be asked to justify your choices.
- Take time to construct a good architecture.
- Testing is very important for us, so your app should be tested.
- At Frichti we really focus on details. Verify your work before sending it to us.
- Some tools are not fully configured, feel free to fix or remove them.

### Design & UX

A nice UX & UI touch and feel is very important to us. Take great care about how you display and style widgets. Don't worry, we are not asking you to be a CSS and design wizard along with being a JavaScript developer, but those appetences will be appreciated.
​
Feel free to use the [frichti.co](https://www.frichti.co/) website to inspire your UI, our Design team will be delighted.

## Restitution

Please document your code or modify this `README.md` file to describe your choices, practices, etc.
​
Share your code with us using a **private** repository - [GitHub](https://github.com/), [GitLab](https://gitlab.com) or [BitBucket](https://bitbucket.org) - or a `.zip` archive.

If you have any question or problem, feel free to contact us.

---

**Thank you for your time and good luck! 🍀**
