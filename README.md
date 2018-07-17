# React - Jest: testing with Jest and Enzyme

In this project we perform Jest excercises showed in Udemy training [Advanced React and Redux](https://www.udemy.com/react-redux-tutorial/learn/v4/overview).

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). Then I ejected and added support for SCSS files in the webpack configuration. You can find the most recent version of create-react-app guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.


## Folder structure

After creation, your project should look like this:

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    comment/...components
    img/
      logo.svg
    modal/...component
    store/...redux-store
    styles/
      ...partials.scss
      index.scss
    App.scss
    App.js
    App.test.js
    index.js
    registerServiceWorker.js
```

## Using static file paths (.env file)

In this project we use static file path refrence. The approach is proped by instructor as having advantage of easier path adaptations when moving files. The .env file setup is supported by create-react-app scripts.


## Notes about testing with Jest & Enzyme

Here I put some personal notes about testing with Jest and Enzyme. 

### setupTest.js (setupEnzyme.js) file to setup Enzyme adapter with Jest

This file is expected in create-react-app setup with Jest testig suite. However this setup did not worked properly in my case. I would receive Enzyme error that adapter function is not initialized. Therefore I renamed file to setupEnzyme and import it into *.test.js files to have Enzyme adapter initialized. 

### Enzyme API

It renders React components without browser. It has 3 renedering modes:

- Static: renders React component and returns plain HTML
- Shallow: renders given React component but NOT its children components
- Full DOM: renders React component and all its children (we can modify all components) 


### Axios, Redux-Promise and Moxios

These three work very well together for integrating http calls into a redux store (axios and redux-promise, see store action and reducer for fetchComments). For (integration) testing moxios is used to mock axios http calls (from JSDOM there is no external call possible).