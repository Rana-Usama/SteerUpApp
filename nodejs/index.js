const express = require('express');
const cors = require('cors')
const IndustryRankRoute = require('./routes/IndustryRankRoute');

const app = express();

// using cors to for public API
app.use(cors())

app.use(express.json());


app.set('port', (process.env.PORT || 5000));

// routes
app.use('/api/industryrank', IndustryRankRoute);

app.listen(app.get("port"), function () {
    console.log("Node app is running on port " + app.get('port'));
});
