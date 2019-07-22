# Deployment

# Cloud Services :-

![](https://blogs.bmc.com/wp-content/uploads/2017/09/iaas-paas-saas-comparison-1024x759.jpg)

### Platform as a service (Paas) :

is a category of cloud computing services that provides a Platform allowing customers to develop ,run and manage web applications.

### paas Platform can be delivered in two ways :

1- As a public cloud service <br>
2- As software installed in private data centers

#### Platform as-a-service provides :

An environment for developers and companies to create post and deploy applications saving developers from the complexities;

#### Platform as a service can improve :

1 - The speed of developing an app .<br>
2 - Allow the consumer to focus on the application itself .

#### With Platform-as-a-service the consumer managers applications and data while the provider managers: runtime, middleware, operating system, virtualization, servers, storage and networking.

### Platform as a service include :

1- Facilities for application design ,application development ,testing
and deployment .

2- Team collaboration web service.

# Environment Variables

An environment variable is a variable whose value is set outside the program, typically through functionality built into the operating system or microservice. An environment variable is made up of a name/value pair, and any number may be created and available for reference at a point in time.

# But Why...

Environment variables are the best way of storing sensitive data like API Keys, Login Credentials and Database Passwords.

# Another Use Cases For Environment Variables

- Execution mode (e.g., production, development, staging, etc.)
- Domain names
- API URL/URI’s
- Public and private authentication keys (only secure in server applications)
- Group mail addresses, such as those for marketing, support, sales, etc.
- Account names

# How To Use Them?

### You can use the Environment Variables in both your front-end and back-end files.

### We have two modules that we can use in our project files (env2), and (dotenv)

## 1. Create a .env File

A .env file is a very explicit way of listing environment variables without the extra syntax (potential human/input error) of a JSON file.

The format of a .env file is:

```
 DB_HOST=127.0.0.1

 DB_PORT=9200

 DB_USER=anon

 DB_PASS=password
```

## 2. Always.gitignore your configuration file

create your .env file in the root directory of your project and don't forget to add it to your .gitignoreto avoid accidentally committing your keys/passwords to GitHub where bad people can (will) steal your secrets!

## 3. Install from NPM

Next install dotenv from npm and save it to your package.json file:

```
  npm i dotenv -D
```

## 4. Use in your Code

Then in your script/module:

```
  require("dotenv/config");
  console.log(process.env.SECRET);
```
