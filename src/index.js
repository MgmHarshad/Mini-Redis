import {app} from "./app.js";
import dotenv from 'dotenv';

dotenv.config({
    path: "./.env",
});

app.get('/', (req,res) => {
    res.send("Mini Redis is running");
});

app.listen(process.env.PORT, () => {
    console.log(`App is running on http://localhost:${process.env.PORT}`);
    
});