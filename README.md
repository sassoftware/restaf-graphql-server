# restaf-graphql-server

The restaf-graphql-server is designed to work with SAS Vya. It uses two key open source projects"

1. [Apollo's graphql-server](https://www.apollographql.com/docs/apollo-server/)

2. [hapijs](https://hapijs.com)

It also depends on [restaf](https://github.com/sassoftware/restaf)

The primary purposes of this library are:

1. Hooks in Viya 3.4 authentication - uses authorization_code

2. Serve up user apps and/or graphql playground- convenient for deploying self-contained app

3. Uses restaf to make REST calls to Viya Server

See CHANGELOG.md for current and future features.

## Disclaimer

In this project we have chosen to use Apollo Server and hapijs - mainly due to the developer's familiarity with these open source software libraries.  

## Installing the server as a dependency

In your graphql based app npm install this server

```script
npm install restaf-graphql-server

```

## Running the server in your app

To start the server write a code as shown below in your app's entry point. This code passes the typeDefs and resolvers to setup the graphql server.

```javascript
    // app.js
    let restafGraphqlServer     = require('restaf-graphql-server');
    let resolvers              = require('./test/resolvers'); // where your resolvers are 
    let typeDefs               = require('./test/schema/schema.graphql'); // where your typeDefs are
    let userRoutes             = null; 
    // set your userRoutes if you have any 
    restafGraphqlServer(typeDefs, resolvers, userRoutes);


```

The information to connect to SAS Viya and other application specific information should be specifed in the env file. Please see the test.env file in this repository for information.

## Notes on userRoutes

Since this server uses hapijs the routes must conform to hapijs specs for routes.
The following routes are reserved

1. graphql - for graphql playground

2. /{param*} - to serve up pages other than graphql

3. /appenv - to receive selected environment variables in your app -set in the env.js file
