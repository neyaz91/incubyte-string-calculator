# String Calculator TDD Kata (TypeScript)

A TypeScript implementation of the String Calculator Kata using Test-Driven Development (TDD).

## Features

- Returns 0 for an empty string
- handle string of comma-separated numbers
- handle new lines between numbers
- Support different delimiters
- Throws error for negative numbers

## Project Structure
├── src
├── tests
├── .gitignore
├── jest.config.js
├── package-lock.json
├── package.json
├── tsconfig.json
├── README.md

StringCalculator.ts: Contains the implementation of the add function.
StringCalculator.test.ts: Contains unit tests for the add function.
jest.config.js: Configuration for running tests with Jest.
tsconfig.json: TypeScript configuration file.
package.json: Project dependencies and scripts.

## Setup
Install dependencies npm install
Run the unit tests
```bash
npm install
npm test
```