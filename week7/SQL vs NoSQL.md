# SQL VS NoSQL

![SQL vs NoSQL](https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190513164801/SQL-Vs-NoSQL.png)
## Structured Query Language (SQL):
Structured Query Language or *SQL* is a standard Database language which is used to create, maintain and retrieve the relational database. It is particularly used to work with structured data where there is relations associated within the data itself.

### What is Relational Database?

Relational database means the data is stored as well as retrieved in the form of relations (tables). Table 1 shows the relational database with only one relation called STUDENT which stores ROLL_NO, NAME, ADDRESS, PHONE and AGE of students.

# Example:
## STUDENT
ROLL_NO | NAME	| ADDRESS | PHONE | AGE
---------|----- | -----|--------|-----------
1 |RAM |DELHI	|9455123451|	18
2 |RAMESH |GURGAON	|9652431543|	18
3 |SUJIT |ROHTAK	|9156253131|	20
4 |SURESH |DELHI	|9156768971|	18
TABLE 1


### Important terminologies that are used in terms of relation:
*Attribute:* Attributes are the properties that define a relation. e.g.; ROLL_NO, NAME etc.

*Tuple:* Each row in the relation is known as tuple. The above relation contains 4 tuples, one of which is shown as:

1	|RAM	|DELHI	|9455123451	|18
----|--|--|--|--

*Degree:* The number of attributes in the relation is known as degree of the relation. The *STUDENT* relation defined above has degree 5.

*Cardinality:* The number of tuples in a relation is known as cardinality. The *STUDENT* relation defined above has cardinality 4.

*Column:* Column represents the set of values for a particular attribute. The column ROLL_NO is extracted from relation *STUDENT*.

ROLL_NO

1

2

3

4

## Query categories:

*Data Definition Language:* It is used to define the structure of the database. e.g; CREATE TABLE, ADD COLUMN, DROP COLUMN and so on.

*Data Manipulation Language:* It is used to manipulate data in the relations. e.g.; INSERT, DELETE, UPDATE and so on.

*Data Query Language:* It is used to extract the data from the relations. e.g.; SELECT

## Popular relational databases:
* *PostgreSQL 😗 An enterprise-level, object-relational DBMS that uses procedural languages such as Perl and Python in addition to SQL-level code.

* *Oracle*

* *MS SQL Server*

 
## NoSQL:
A *NoSQL* originally referring to non SQL or non relational is a database that provides a mechanism for storage and retrieval of data. This data is modeled in means other than the tabular relations used in relational databases. 
NoSQL databases are used in real-time web applications and big data and their use are increasing over time.

## NoSQL Database Types:
* *Document databases*
* *Graph stores*
* *Key-value stores*
* *Wide-column stores*

## Popular NoSQL databases:
* *MongoDB:* The most popular open-source NoSQL system. MongoDB is a document-oriented database that stores JSON-like documents in dynamic schemas. Craigslist, eBay, and Foursquare use MongoDB.

* *CouchDB*
* *HBase*
* *Oracle NoSQL Database*

## Code Example:
``` javascript
{
    "_id" : ObjectId("5ac0ac19d412d208b8c91214"),
    "course_name" : "react.js",
    "course_price" : 10,
    "__v" : 0
} 
```


# What is the major difference between databases?
### The main difference is whether it is SQL or NoSQL.
 /   | SQL      | NoSQL
-----| -------- | -------------
History | Old piece of technology  | modern syntax and method
Structure | Table structure (all attributes should have the same number of entities) | Document Structure (don't follow the same structure)
Flexibility | Requires a schema | More flexible to change (it is a good choice for startups)
Relationships | Great with Relationships (group the related data in a table and link it up to another one) | Not great with complix relationships
Scalability | Scales Vertically | Horizontally Scalable

<br><br>

# When do I use SQL and NoSQL?
## SQL
  * When I deal with unchangeable data over time.
## NoSQL
  * Ehen I store a huge amount of data.
  * When I don't need the relationship between the data.
  * When I dealing with data changing over time.

<br><br>

# SQL:
## Advantges:
- you can store data accross multiple tables and we merge them togather with sql queries
- update data in one place
- you don't have duplicated data

## disadvantges:
- if you have complex relations it may be leading to worse preformence
- limitations for lots of(thousands) read write queries per second

# NoSQL
## advantages:
- no relations (or very few)
- great for reading a lot
- Flexibility (add)
- Manageability

## disadvantges:
- if you update in a collection you have to update in another collection beacuase duplicating the data instead of relations
