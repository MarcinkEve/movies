# My favourite movies list app

This application is made with React and contains two parts:

- frontend - "src" directory;
- backend - "backend" directory.

It allows you to log in to your account and record your favourite movie title, year and genre. The data is saved in localhost MySQL database. List of saved movies is rendered in screen. It is also possible to log out and back to log in form.

It is possible to change list's data (only working with local DB):

- create a new record by clicking "Add it" button in header;
- edit records by clicking "pencil" icon;
- remove item from list by clicking "bin" icon.

The list of items may be:

- sorted by movie title;
- sorted by movie years released;
- filtered by genre.

## Run app

To run this app it is necessary to instal npm package and few dependencies.

1. Find frontend directory- in command line (or terminal) write:

   > cd movies

2. Install npm package to frontend:

   > npm i

3. Run the app:

   > npm start

4. Open new terminal and find backend directory:

   > cd Backend

5. Install npm package to backend:

   > npm i

6. Run the server:

   > npm start

   App runs on it's own server at http://localhost:5050

## Usage

To use this app in browser you need to login.\
Valid data of login is:

1.  user1:\
    username: "user1"\
    password: "pass1"

2.  user2:\
    username: "user2"\
    password: "pass2"

## Live demo:
(due to local DB for demonstration purposes it renders static data from code)

https://movies-marcinkeve.vercel.app/

https://user-images.githubusercontent.com/92999559/170839667-39dc9ee6-75ca-460d-b19d-732c1d812a56.mp4

