# bookish-sniffle 

## Description
This project, Bookish Sniffle, is an E-commerce Object-Relational Mapping (OEM) application. As E-commerce has gained significant prevalence of OEM platforms and generated trillions of $US, developers should understand the fundamental architecture of e-commerce. This application uses Express.js API and configure it to use Sequelize to interact with a PostgreSQL database. The API Get, Post, Put, and Delete routes are generated and perform CRUD operations with Sequelize methods and tested in Insomnia Core for category, product, and tag as the data for each of these routes is displayed in a formatted JSON. 

## Usage
The application consists of many features which include the use bcrypt to encrypt passwords, Sequelize methods, model, and database relationship one-to-one, one-to-many, and many-to-many, ESLint to enforce code styling and use of the PostgreSQL database to organize and store the data and provides a convenient way to get the product information promptly. The application can be invoked by using the instructions in the Test secion. 

## Video Link to the bookish-sniffle: 
https://drive.google.com/file/d/1PlebO6aQMx2DXnCXSPL2Wg94ab3kk06T/view?usp=sharing

## Installation
npm i 
npm install node bcrypt dotenv express eslint pg sequelize  
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
The server is listening, open the Insomnia Core to run the routs. 

## Questions
When the GitHub profile (https://github.com/ksytwu100) is provided, that is added to the section entitled Questions. 

The question in the module - It is your responsibility to include a note in the README section of your repo specifying code source and its location within your repo.
The application is built with my understanding of the required materials by attending classes, BCS tutoring sessions, Google searches, and references of the class activities in the modules.


