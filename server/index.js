const express = require('express');

const ErrorHandler = require('./handler/errorHandler');
const db = require('./database/database');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));


if(process.env.ENV === 'Dev') { 
    app.use(ErrorHandler.developmentErrors);
} else {  
    app.use(ErrorHandler.productionErrors);
}
app.use(ErrorHandler.notFound);
app.use(ErrorHandler.notFound);

app.listen(process.env.Port || 5000, () => {
    console.log(`Server Started`);
});