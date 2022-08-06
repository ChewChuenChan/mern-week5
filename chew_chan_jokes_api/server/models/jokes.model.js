const mongoose = require ("mongoose");

const JokeSchema = new mongoose.Schema(
    {
        setup:{
            type:String,
            // validation can set up here
            required:[true, 'Please type a setup'],
            minlength:[3,'Setup length must be at least 3 characters']
        },
        punchline:{
            type:String,
            // validation set up here
            required:[true, 'Please type a punchline'],
            minlength:[3,'Setup length must be at least 3 characters']
        },
    
},{timestamps:true});

const Joke = mongoose.model ("Joke",JokeSchema);

module.exports = Joke;