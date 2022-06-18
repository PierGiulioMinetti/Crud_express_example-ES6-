import express from "express";
/**
 * will enable working with json from post request
 */
import bodyParser from 'body-parser';
/**
 * import the users routes (we can name anything we want)
 */
import userRoutes from './routes/users.routes.js'


const app = express();
const PORT = 3000;

/**
 * will allow us to work with json to the whole app
 */
app.use(bodyParser.json());

/**
 * all routes from here start with users routes 
 */
app.use('/users', userRoutes)

app.get('/', (req, res) => {
    res.send('hello there!')
})


app.listen(PORT, () => {
    console.log(`app listening on port: ${PORT}`);
});