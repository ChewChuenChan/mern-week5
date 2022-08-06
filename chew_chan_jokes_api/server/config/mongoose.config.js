const mongoose = require ("mongoose")
const dbName = "jokeDB"

mongoose.connect(`mongodb://localhost/${dbName}`)
    .then(()=> console.log(`connected to the db ${dbName}`))
    .catch((err)=> console.log(`Error in DB connection to ${dbName}`,err));