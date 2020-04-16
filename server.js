if( process.env.NODE_ENV != 'production') {
    require('dotenv').config();    
}
   
    


const express = require("express");
const app = express();
const indexRouter = require("./routes/index");
const expressLayouts = require("express-ejs-layouts");

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");
app.use(expressLayouts);
app.use(express.static("public"));

const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL, {
     useUnifiedTopology: true ,
     useNewUrlParser: true
});

    const db = mongoose.connection
    db.on("error", error => console.error(error))
    db.once("open", () => console.log("Connected to the Database...."));








app.use("/", indexRouter); 






const port = 3000;

app.listen(port , () => {
    console.log(`listening to the port ${prot}`);
});