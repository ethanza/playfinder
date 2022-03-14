# FETest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.4.

## Comments
- created new method to get all available slots > 0 if no input is entered
- updated the method in the search service to retrieve via start and end dates, could make this a find by pitch id (however they are all unique so opted to filter between start and end dates)
- Pushed the data into the store
- reading from the store to display on the single item page
- Would add a BE api end point to remove the court booking and allow someone to book


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
