const express = require('express');
const graphqlHTTP = require('express-graphql');
const app = express();
const schema = require('./schema/Schema')
app.use('/graphql',graphqlHTTP({
    schema,
    graphiql: true
}))
const PORT = 4000;
app.listen(PORT,()=>{
    console.log(`Server Listening on Port ${PORT}`)
})