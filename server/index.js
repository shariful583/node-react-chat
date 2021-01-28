const express = require('express');

const ErrorHandler = require('./handler/errorHandler');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(require('cors')())

app.use(require('./routes/user'));
app.use(require('./routes/chatroom'));


if(process.env.ENV === 'Dev') { 
    app.use(ErrorHandler.developmentErrors);
} else {  
    app.use(ErrorHandler.productionErrors);
}
app.use(ErrorHandler.notFound);
app.use(ErrorHandler.notFound);

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server Started`);
});