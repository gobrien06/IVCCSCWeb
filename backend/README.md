SET UP

1. Install Postgres
2. In command prompt run
```
    createdb -p (your port here) -U (your username here) (your database name)
```
   If createdb could not be found add ..\Program Files\PostgreSQL\12\bin to your PATH environment variable
   
3. Enter the Postgres interactive terminal by running
 ```
   psql -p (the same port) -U (the same username) (your database name)
```
4. Create the email domain by running
```
  CREATE EXTENSION citext;  
  CREATE DOMAIN email AS citext 
    CHECK ( value ~ '^[a-zA-Z0-9.!#$%&''*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$' );
```
5. Create the tables by running
```
  CREATE TABLE email_list (user_email email PRIMARY KEY);  
  CREATE TABLE posts (id bigint PRIMARY KEY, author text NOT NULL, avatar text NOT NULL, date timestamp with time zone NOT NULL, content text NOT NULL);
```
6. Add an environment variable called POSTGRES_TEST_URL with the URL to the database
```
  postgresql://[user[:password]@][netloc][:port][/dbname][?param1=value1&...]
  Ex: postgresql://postgres:mypassword@localhost:1437/tablename
```
