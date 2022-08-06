const JokeController = require ('../controllers/jokes.controller');

module.exports = (app) =>{
    app.get("/api/jokes",JokeController.getAllJokes);
    app.post("/api/jokes",JokeController.createNewJokes);
    app.get("/api/jokes/:id",JokeController.getJokeById);
    app.put("/api/jokes/:id",JokeController.updateJokeById);
    app.delete("/api/jokes/:id",JokeController.deleteJokeById);
}