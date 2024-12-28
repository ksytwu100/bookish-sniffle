# bookish-sniffle 

## Description
This project, Bookish Sniffle, is an E-commerce Object-Relational Mapping (OEM) application. As E-commerce has gained significant prevalence of OEM platforms and generated trillions of $US, developers should understand the fundamental architecture of e-commerce. This application uses Express.js API and is configured to use Sequelize to interact with a PostgreSQL database. The API Get, Post, Put, and Delete routes are generated CRUD operations with Sequelize methods and tested in Insomnia Core for category, product, and tag as the data for each route is displayed in a formatted JSON. 

## Usage
The application consists of many features, including using bcrypt to encrypt passwords, Sequelizing methods, models, and database relationships one-to-one, one-to-many, and many-to-many, using ESLint to enforce code styling, and using the PostgreSQL database to organize and store the data. It also provides a convenient way to get product information promptly. The application can be invoked by using the instructions in the Test section. 

## Video Link to the bookish-sniffle: 
https://drive.google.com/file/d/1PlebO6aQMx2DXnCXSPL2Wg94ab3kk06T/view?usp=sharing

## Installation
npm i 
npm install node bcrypt dotenv eslint express pg sequelize  
PostgreSQL
Insomnia 

## Credits
100 Points

## License
MIT

## Test 
When the database needs to be reset
In the terminal, type:
1. psql -U postgres < db/schema.sql
2. Enter password
3. npm run seed
4. node server.js
   
The server starts listening and opens the Insomnia Core to run the routs.


## Questions
The GitHub profile (https://github.com/ksytwu100) is provided.

It is the student's responsibility to include a note in the README section of the repo specifying the code source and its location within your repo.
The application is built on my understanding of the required materials by attending classes, BCS tutoring sessions, Google searches, and references to the class activities in the modules.


