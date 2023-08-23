const express = require("express");

const studentRouter = require("./routes/students.route");

const app = express();
const PORT = 2000;
app.use(express.urlencoded({extended: true}));

app.use(studentRouter);

                                                                                                                                                                                
// routes: here I used routes part previous 


app.use((req, res, next)=>{
    res.send(`Error 404! Not Found`);
    /* res.status(404).json({
        message: "Not Found",
    }) */
})
app.listen(PORT,()=>{
    console.log(`Server is working at: http://localhost:${PORT}`);
})
