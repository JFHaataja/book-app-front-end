# Book App

Book App is part of a book-related Full-Stack Web Application project. It is the SPA Front-End application for an ASP .NET Core REST API Back-End service. Both applications have been deployed and are running live on Azure (Back-End application) and Vercel (Front-End application).

## Application overview

This is a simple book related CRUD application. App data comes from a single Azure cloud hosted MS SQL database table. Application users can perform CRUD operations on books i.e. they can add a new book on the list, edit books and delete them. Users can also search for books using book names.

## Live demo

You can check out the live demo of this app by clicking the link below.

[Live demo of Book App](https://bookapp.vercel.app/)

## Get started

Prerequisites:

-   Node

To set up the app execute the following commands.

```bash
git clone https://github.com/JFHaataja/book-app-front-end
cd book-app-front-end
npm install
```

After everything has finished installing, you need to then create an empty .env file at the root level of the project:

![image](https://user-images.githubusercontent.com/96774962/210604332-98094c22-d35b-467e-b79a-388dc4e82def.png)

After that open the .env file and paste the necessary environmental variable into it.

`npm start`

Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

`npm run build`

Builds the app for production to the build folder.

`npm run lint`

Analyzes the code with ESlint.

`npm run format`

Formats the app with Prettier.

`npm run eject`

Note: this is a one-way operation. Once you `eject`, you can't go back!

If you aren't satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

## Important

In order to run this application in your local machine, you need to add an empty .env file into the root of the project and paste the environmental variable containing the Back-End API End-Point URL. (Note: if you're from Buutti, you can find the correct environmental variable in a text file containing all necessary information about this project.)

## Project Structure

```bash
src
|
+-- api               # Axios API service file for fetching data from the REST API
|
+-- assets            # React-icons and a SASS file
|
+-- components        # shared components used across the entire application
|
+-- services          # book service files
```

## Tech Stack

**Front End:** React.js, SASS, React-Bootstrap, Vercel

**Back End:** ASP .NET Core, Microsoft SQL, Microsoft Azure

## Testing

This app includes some Cypress E2E tests.

To open up Cypress testing tool run the following command:

`npm run cypress:open`

You can run the tests after you have added the necessary .env content.

## Contact

If you have any questions or something's not working, please send me an email at jon.haataja@gmail.com. Thank you!
