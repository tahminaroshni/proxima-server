# Proxima

Proxima is a web application that allows users to add, update, and delete their project information. This is application is split into two parts, the client-side and server-side.

## Features

 * **Add project information:** Users can add their project information such as title, description, and GitHub repository link. 
 * **Update project information:** Users can update their existing project information. 
 * **Delete project information:** Users can delete their existing project information. 
 * **Autentication system:** JWT is used for authentication and Bcrypt is used for password hashing. 
 * **User specific information:** Each user can only see their own project information. 

## Tools

 * **React:** JavaScript library for buildin user interfaces.
 * **React Router:** Library for client-side routing in a React application.
 * **Tailwind CSS:** Utility-first CSS framework for stylin websites.
 * **Node.js:** JavaScript runtime for running JavaScript on the server side.
 * **Express:** Web application framework for Node.js to create a RESTful API.
 * **MongoDB:** NoSQL database that stores data in JSON-like documents.
 * **Mongoose:** MongoDB object modeling tool that provides a higher-level API for interacting with the database.
 * **JWT:** JSON Web Tokens for authentication and authorization in web applications.
 * **Bcrypt:** Password hashing function for securely storing passwords in the database.
 
## Installation
 
To install the project, you'll need to clone the repository and set up the environment variables for both the client-side and server-side.
 1. Clone the client repository:\
       `git clone https://github.com/tahminaroshni/proxima-client.git`
 2. Clone the server repository:\
       `git clone https://github.com/tahminaroshni/proxima-server.git`
 3. Install dependencies run for both the client and server side:\
       `npm install`
 4. Set up environment variables:
      * For the client-side, create a `.env` file in the root directory and add the following line, replacing `<base_url>` with the URL of the server-side:\
       `REACT_APP_BASE_URL=<base_url>`
      * For the server-side, create a `.env` file in the root directory and add the following line, replacing `<mongo_uri>` with the MongoDB URI and `<secret>` with a secret string for JWT:\
       `MONgO_URI=<mongo_uri>`\
       `SECRET=<secret>`
 5. Start both the client and server side:\
       `npm start`
     
 ## Links
 
 * [Live Demo](https://proxima-client-project.netlify.app)
 * [Front-End Repository](https://github.com/tahminaroshni/proxima-client)
 * [Back-End Repository](https://github.com/tahminaroshni/proxima-server)
