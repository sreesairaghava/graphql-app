 const graphql = require('graphql');
const _ = require('lodash');
 const {GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLInt
} = graphql;
//Dummy Data:
var books= [
    {name:'Name of the Wind',genre:'Fantasy',id:'1'},
    {name:'The Final Empire',genre:'Fantasy',id:'2'},
    {name:'The Long Earth',genre:'Sci-Fi',id:'3'},
    {name:'Revolution 20-20',genre:'Fantasy',id:'4'}
];

var authors=[
    {name:'Chetan Bhagath',age:45,id:'1'},
    {name:'Test 2', age: 35, id:'2'},
    {name:'Test 3', age: 56, id:'3'},
    {name:'Test 4', age:65, id:'4'}
]
 //Defining Book Object
const BookType = new GraphQLObjectType({
    name:'Book',
    fields:()=>({
        id:{type: GraphQLID},
        name: {type: GraphQLString},
        genre: {type: GraphQLString}
    })
});

const AuthorType = new GraphQLObjectType({
    name:'Author',
    fields:()=>({
        id:{type: GraphQLID},
        name: {type: GraphQLString},
        age: {type: GraphQLInt}
    })
})
const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        book:{
            type:BookType,
            args:{id:{type:GraphQLID}},
            resolve(parent, args){
                    //Code to get data from DB or other source
                 return _.find(books,{id: args.id});  

            }
        },
        author:{
            type:AuthorType,
            args:{id:{type: GraphQLID}},
            resolve(parent,args){
                return _.find(authors,{id:args.id})
            }
        }
    }
});
module.exports = new GraphQLSchema({
    query: RootQuery
});