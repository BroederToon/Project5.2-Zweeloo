# Stichting Kunstenaarsdorp Zweeloo Mobile App

The mobile app is made for Stichting Kunstenaarsdorp Zweeloo, on this app you can walk or cycle the routes. These can be made by the [Stichting Kunstenaarsdorp Zweeloo Route Editor](https://github.com/Yannieck/Project5.2-Zweeloo-Web).

## Requirements

This project runs with Nodejs, Expo and NPM. You can download NodeJS and NPM (comes with Nodejs) from the [Nodejs downloads page](https://nodejs.org/en/download/). During the development phase, version [v16.17.0](https://nodejs.org/download/release/v16.17.0/) of Node was used. You will also need a MySQL database. For this we recommend using [XAMPP](https://www.apachefriends.org/). Also make sure you have done the installation procedure for the web editor [Stichting Kunstenaarsdorp Zweeloo Route Editor](https://github.com/Yannieck/Project5.2-Zweeloo-Web). Before doing this one.

## Installation

1. Make sure you have read and meet the requirements.
2. Make sure that the [Route editor](https://github.com/Yannieck/Project5.2-Zweeloo-Web), has been setup first.
3. Clone this repository to your local machine.
4. Make sure your MySQL, Apache and the web server is running.
5. Open the terminal and CD into the root folder of this project.
6. type in the following command in the terminal

```shell
npm i
```

7. Add a new file called `.env` to the root folder.
8. Add the content to the `.env` file following the [.env-template](#env-template).

> If you are pulling new commits, make sure you have the latest version of the project by running the install command again.

## Running

In order to run the application, the user needs to type in the following command in the terminal.

```shell
npx expo start
```

## Release

There are a couple of things that need to be done before the release. In order to release the expo app on android and playstore by following the steps on [expo](https://docs.expo.dev/build/setup/). The app also needs to request the users location, this needs permission from the play store. More information about the use of [background permission](https://support.google.com/googleplay/android-developer/answer/9799150?hl=en).

## Stakeholders

### Organisers

-   Stichting Kunstenaarsdorp Zweeloo
-   NHL Stenden Emmen - Informatica

#### Project Group

-   Thijs Janse
-   Robin van Dijk
-   Dennis Schomaker
-   Franca Baars
-   Yannieck Blaauw

## References

-   [Node.js](https://nodejs.org/en/)

-   [Node.js v16.17.0](https://nodejs.org/download/release/v16.17.0/)

-   [XAMPP](https://www.apachefriends.org/)

### .env Template

```shell
IP = http://serverAdress
```

-   `IP`: the link where the api is called from in order to show the routes and sponsors
