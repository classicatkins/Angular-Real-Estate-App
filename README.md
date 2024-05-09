# angular-homes-v17

This Angular Real Estate Application allows users to explore real estate listings similar to platforms like Zillow. Users can search for properties by city, view detailed information about each listing, and submit inquiries directly through the application. This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.6.

## Features

- **Property Search**: Users can search for properties by city.
- **Detailed Property Views**: Clicking on a property listing displays detailed information about the real estate using routing.
- **Inquiry Form**: Users can fill out a form to inquire about properties, which is submitted asynchronously.

## Technology Stack

- **Angular**: Used for building the front-end SPA (Single Page Application).
- **JSON-server**: Utilizes a local web server to simulate a real back-end for development purposes.
- **Asynchronous Services**: Angular services are used to handle asynchronous HTTP requests to retrieve data from the JSON-server.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them:

```bash
npm install -g @angular/cli
npm install -g json-server
```

1. Clone the repository:
```bash
git clone https://github.com/your-username/angular-real-estate-app.git
```
2. install dependencies:
```bash
npm install
```
3. Start the JSON-server:
```bash
json-server --watch db.json
```
4. Serve the Angular app:
```bash
ng serve
```

## Usage
To use the app, navigate to the home page and begin searching for properties by city. Select a property to view more details and use the form to submit an inquiry.


## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
