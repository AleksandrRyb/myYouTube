import express from 'express';

const app = express();

const PORT = 4000;

const handleHome = (req, res) => {
    res.send("Hello World")
}

const middle = (req, res, next) => {
    let a = 1;
    if (a === 1) {
       next()
    } else {
        throw new Error("this is wrong")
    }
}

//Routes
app.get('/', middle, handleHome);



//Run server
function handleServerStart() {
    console.log(`Server is running on port ${PORT}`)
}

app.listen(PORT, handleServerStart)