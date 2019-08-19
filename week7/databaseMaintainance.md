# Database Build Scripts


## What Is A Build Script

It's a bunch of SQL Statements that deal with database, i.e. creating tables and inserting data... etc.


## why do you need one.

instead of writing your SQL statements in terminal, EACH TIME you want/need to change ur schema, you can write codes in script that allow you to use it in one line. Also, makes editing on the schema much easier and understood.


# Database Migration


## ***What is Database Migration :+1:***


1. A schema migration, database change management or database migration refers to the management of incremental.

2. Schema migration is performed on a database whenever it is necessary to update or revert that database's schema to some newer or older version.



## Risks and benefits :+1:


* Schema migration allows for fixing mistakes and adapting the data as requirements change. They are an essential part of software evolution.


* Development and test databases tend to be smaller and cleaner. The data in them is better understood or, if everything else fails, the amount of data is small enough for a human to process.


* Applying a schema migration to a production database is always a risk.


* Production databases are usually huge, old and full of surprises. The surprises can come from many sources:

    - People directly changing the database without using the designated tools
    - Bugs in the schema migration tools
    - Mistakes in assumptions how data should be migrated
    - Corrupt data that was written by old versions of the software and not cleaned properly


## Advantages :+1: 

**Developers no longer need to remove the entire test database in order to create a new test database from scratch**


## Schema Migrations Tools
- Flyway
- Liquibase


## Thank you for listening :hatched_chick: 
