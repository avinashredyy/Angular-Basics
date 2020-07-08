# AngularBasics

## Requirements
1. Install node.js from here (I ususally prefer the LTS version for its stability) -> [Node.js](https://nodejs.org/en/) . This gives you the ability to access npm.
2. Install Angular CLI by running the following command in your terminal: `npm install -g @angular/cl`. This gives you the ability to access ng commands


## Creating a new Angular project using the Angular CLI
1. Run the following command in your terminal: `ng new <app-name>`.
 
 
## Running the Angular project
1. Run the following command in your terminal: `cd <app-name>`. This command takes you into the project folder.
2. Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Creating a new component (Branch 001-Creating-a-new-component)
1. Angular CLI allows us to create a component using the following command: `ng generate componenent <component-name>` OR `ng g c <component-name>`.
2. Creating a component through the Angular CLI automatically imports it into `app.module.ts` file and also adds it to the declerations array.


## Nesting a component within another component (Branch 002-Nesting-Components)
1. We can nest one component inside another component by using its selector in the parent HTML file. For example we can use the first component inside the app component by using the first components selector likewise `<app-first-component></app-first-component>` in the app components HTML file.


## String interpolation (Branch 003-String-interpolation)
1. We can display any value of a JavaScript variable or a function on an HTML page by using `{{ }}`. 
2. First example, if we have a variable `x = 10`. We can display the value of x on the HTML page likewise: `{{ x }}`. It will display as `10` on the webpage.
3. Second example, if we have a function named `getName()` which returns a string `avinash` upon execution. We can display the return value on the HTML page likewise: `{{ getName() }}`. It will display as `avinash` on the webpage.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
