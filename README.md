# Contact book

## This is a simple api implimentation for the CRUDE operations using nodejs(Javascript) and reactjs(Javascript)

 ### Backend libraries
 - [x] express - to manage server and routes
 - [x] cors - allow cross-origin access
 - [x] bcrypt - to hash and store passwords
 - [x] jsonwebtoken - used for authentication
 - [x] uuid - Universally Unique IDentifier to generate unique id keys
 - [x] keep passwords, API keys, and other sensitive data out of your code (However the .env file has been included in this repo)
 - [x] nodemon - essentially for development to restart the server
 - [x] pg - provide modules for interacting interfacing with PostgreSQL database


 ## Installation
 - [x] fork, clone and run npm install 
 - [x] create contactbook db on your postgres shell - the sql commands are in the file name schemas.sql
 - [x] you can also restore the contactbook_dump.sql
 - [x] update your .env where necessary
 - [x] to start the backend npm run dev


## Frontent 
- [x] the frontend is a branch named frondend
- [x] to install the frontend use npm install (from within the frontend folder)
- [x] 

## Default user accounts
- [x] email user1@gmail.com password user123
- [x] email user1@gmail.com password user123
- [x] note this can be create from the frontend once database is setup


## Authentication endpoints
- [x] post http://localhost:8000/signup
- [x] post http://localhost:8000/login

## Other endpoints
- [x] get http://localhost:8000/contacts/:userEmail
- [x] post http://localhost:8000/contacts
- [x] patch http://localhost:8000/contacts/:id
- [x] delete http://localhost:8000/contacts/:id




### signup page
- [x] aut redirect and login  
- [x] keep user email and auth token in cookies (consider htttp-only cookies or manage session using react statemanagement)
![signup page](https://github.com/leo-mutuku/contactbook/blob/main/public/signup.JPG)

- [x] keep user email and auth token in cookies (consider htttp-only cookies or manage session using react statemanagement)
### login page
![signup page](https://github.com/leo-mutuku/contactbook/blob/main/public/login.JPG)

### homepage after successful login
![signup page](https://github.com/leo-mutuku/contactbook/blob/main/public/homepage-after-login.JPG)

### add contact page / button click
![signup page](https://github.com/leo-mutuku/contactbook/blob/main/public/Add-contact-page.JPG)

### update contact book with some entries
![signup page](https://github.com/leo-mutuku/contactbook/blob/main/public/updated-contactbook.JPG)

### delete an entry from contact book
![signup page](https://github.com/leo-mutuku/contactbook/blob/main/public/deteled-contact.JPG)

### signout, redirect to login clear cookies
![signup page](https://github.com/leo-mutuku/contactbook/blob/main/public/signout.JPG)


#    ------------------------------------------End ----------------------------------------
  
