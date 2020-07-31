## Description

- run tests: `protractor conf.js`

## Explanation

- I Created 5 Test steps from the Scenario provided
- I used element(by.id()) to locate the UI elements with id assignment
- For the angular material I used the reference <https://github.com/angular/protractor/tree/5.4.1/example/angular_material>
- I used the expect to read error and success messages
- I used Browser sleep to wait for the browser to respond and view the test steps

## Prerequisites

- install Node 
- `npm install -g protractor` to install protractor
- `npm install @babel/core @babel/register --save` to install babel
- `npm install` to install the project dependencies
- `protractor --version` to validate the protractor version
- `webdriver-manager update` update the webdriver
- `webdriver-manager start` run the webdriver
- `pwd` to confirm current directory
