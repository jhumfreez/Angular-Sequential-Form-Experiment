# Sequential Form Experiment

## Description
This repo is a workshop to find a decent pattern for the following form conditions and requirements:
1. You have multiple dropdown fields.
1. The options for the first field are provided by an API call, and this field initializes as disabled until response returns and defaults to an empty selection option.
1. The rest are empty and disabled.
1. Upon selecting an option from the first, an API call occurs that populates options for the second and enables it.
1. This chain continues for the rest of the fields.
1. If a field changes: all fields following it (not preceding, only following) are reset. The first field after the changed one is reset and remains enabled. The rest of the following fields are reset and disabled.

## Local Setup

###### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

###### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

###### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

###### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

###### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/ngxs-repro-1rzmzp)

###### Credits
Favicon: generated using the following graphics from Twitter Twemoji:
- Graphics Title: 1f60a.svg
- Graphics Author: Copyright 2020 Twitter, Inc and other contributors (https://github.com/twitter/twemoji)
- Graphics Source: https://github.com/twitter/twemoji/blob/master/assets/svg/1f60a.svg
- Graphics License: CC-BY 4.0 (https://creativecommons.org/licenses/by/4.0/)
