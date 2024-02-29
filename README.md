# Contact Manager Web Application

This is a Contact Manager web application built using the MERN stack. It allows users to manage their contacts by adding, editing, and deleting them. MongoDB is used for data storage.

## Features

- Add new contacts with details like first name, last name, email, phone number, and category.
- View list of all contacts.
- Edit existing contacts.
- Delete contacts.

## Technologies Used

- MongoDB: For storing contact data.
- Express.js: Backend framework for handling HTTP requests and routing.
- React.js: Frontend library for building user interfaces.
- Node.js: JavaScript runtime environment for running server-side code.

## How to Run

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies by running `npm install` in the root directory.
4. Start the backend server by running `npm start` in the `server` directory.
5. Start the frontend development server by running `npm start` in the `client` directory.
6. Access the application in your web browser at `http://localhost:3000`.

## Notes

- The Add and Edit functionality has been merged together to reduce code duplication. Both the Add and Edit pages use the same view.
- The routes for Add and Edit pages accept an optional `id` parameter. If the `id` parameter is present, it indicates editing an existing contact, otherwise, it indicates adding a new contact.

