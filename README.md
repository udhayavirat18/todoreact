Todo App
A simple Todo application built using React and Vite. The app allows users to add, edit, and delete tasks. It also persists data using localStorage so that tasks remain after the page is refreshed.

Features
Add tasks: Create new tasks by entering text and pressing "Add Todo" or hitting Enter.
Edit tasks: Modify an existing task by clicking the "Edit" button.
Delete tasks: Remove tasks from the list by clicking the "Delete" button.
Persistent storage: Tasks are saved in localStorage, so they will remain even after refreshing the page.
Getting Started
Follow these steps to run the app locally.

Prerequisites
Node.js: Make sure you have Node.js installed. You can download it from here.
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/todo-app.git
Navigate into the project directory:

bash
Copy code
cd todo-app
Install dependencies:

Run the following command to install all necessary dependencies:

bash
Copy code
npm install
Run the development server:

Start the app using the Vite development server:

bash
Copy code
npm run dev
After running this command, the application will be available at http://localhost:5173.

Building for Production
To build the app for production, run:

bash
Copy code
npm run build
This will create a dist folder with optimized production files.

Tech Stack
React.js: Frontend library for building the user interface
Vite: Fast build tool and development server for modern web projects
localStorage: Used to store tasks persistently