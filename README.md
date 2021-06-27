# Peoples Energy Tech Test (WIP)

Tech test requiring a NodeJS endpoint and ReactJS front end for retrieving and displaying data about the solar system

## How to Run (Development Mode)

To run the app in development mode, first clone the Git repo.
Next, install the dependencies in both the root and client directories by running:

### `npm install`

To start the server, run the following command in the root directory:

### `nodemon server/index.js`

This will load the server on [http://localhost:3001](http://localhost:3001).

To start the client, run the following command from the client directory:

### `npm start`

This will load the client on [http://localhost:3000](http://localhost:3000) andd can be accessed in the browser.

## Outstanding To Do List

-   Implement redux - handle loading/error states and store celestialData to reduce server load
-   Access environment variables in client to prevent hardcoding server host and port
-   Implement testing e.g. Jest/Cypress
-   Pull GetCelestialData into a custom hook
-   Add page for individual planets with more detailed information
-   Use real planet data instead of mock data
-   Implement react cache to increase performance
-   Prepare/test deployable builds and write instructions

## Environment variables

These environment variables should be added to a .env file in the root directory:

| Variable    | Type    |
| ----------- | ------- |
| PRODUCTION  | boolean |
| CLIENT_HOST | string  |
| CLIENT_PORT | number  |
| SERVER_HOST | string  |
| SERVER_PORT | number  |
