const mongoose = require('mongoose');

const databaseUrl = "mongodb://localhost:27017/appDatabase"
const databaseOptions = {
    userNewUrlParser : true
};

mongoose.connect(databaseUrl, databaseOptions);
mongoose.connection.on("open", function(){
    console.log("MongoDB connection openned");
});