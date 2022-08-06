const Joke = require ("../models/jokes.model");


module.exports={
    // function to get all jokes
    getAllJokes:(req,res) =>{
        Joke.find({})
        .then((allJokes)=>{
            console.log(allJokes);
            res.json(allJokes);
        })
        .catch((err)=>res.status(400).json({message:'something went wrong with getAllJokes',error:err}));
    },

    // function to create a joke
    createNewJokes:(req,res) =>{
        Joke.create(req.body)
        .then((newJoke)=>{
            console.log(newJoke);
            res.json(newJoke);
        })
        .catch((err)=>res.status(400).json({message:'something went wrong with createNewJoke',error:err}));
    },        

    // function to get a single jokes
    getJokeById:(req,res) =>{
        Joke.findOne({_id:req.params.id})
        .then((joke)=>{
            console.log(joke);
            res.json(joke);
        })
        .catch((err)=>res.status(400).json({message:'something went wrong with find one',error:err}));
    },

    // function to update a joke
    updateJokeById:(req,res) =>{
        Joke.updateOne({_id:req.params.id}, req.body, {new:true,runValidators:true})
        .then((updatedjoke)=>{
            console.log(updatedjoke);
            res.json(updatedjoke);
        })
        .catch((err)=>res.status(400).json({message:'something went wrong with update joke',error:err}));
    },

    // function to delete a joke
    deleteJokeById:(req,res) =>{
        Joke.deleteOne({_id:req.params.id})
        .then((deletedjoke)=>{
            console.log(deletedjoke);
            res.json(deletedjoke);
        })
        .catch((err)=>res.status(400).json({message:'something went wrong with delete joke',error:err}));
    },    
};

