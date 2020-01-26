# FIRST APP
## Content

- What are the components?.
- What are structural directives?.
- Use of plunker for our first interaction with Angular.
- Working locally on a project at Angular.
- A brief introduction to all the files used in Angular QuickStart.
- Using Bootstrap 4 for our styles.
- Creating HTML files to take care of the visual structure of our components.
- We will create an application with 3 reusable components.
- *ngFor and the *ngIf.

## Install

```sh
$ ng new <appname>
```

## Requirements:
#### Core-js: (3.6.4)

```sh
$ npm install --save core-js@^3
```

#### Karma-jasmine-html-reporter: (1.5.1)

```sh
$ npm install karma-jasmine-html-reporter@1.5.1
```

#### Jasmine-core: (3.5)

```sh
$ npm install jasmine-core
```

## Run Angular (default, or specific port)

```sh
$ ng serve
$ ng serve -p <port>
```

## Reinstall modules

```sh
$ npm install
```

## Bootstrap
#### CDN or a copy in server?:

Why not both?
Link stylesheet and make a copy on my server, using a testing script to run from my server if the imported link fails.

## Create component with Angular CLI

```sh
$ ng g c component/<component-name>
```



# AUTOMATIC README (FIRST APP)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.23.

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
