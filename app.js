const express = require('express');
const app = express();
const port = 3000||process.env.PORT;
const path = require('path');


// middleware
app.use(express.urlencoded({ extended: true }));



// routes
app.get('/', (req, res) => {
    let data = {
        "slack_name": "Oluwaseun Adesina",
        "current_day": "Monday",
        "utc_time": "2023-08-21T15:04:05Z",
        "track": "backend",
        "github_file_url": "https://github.com/username/repo/blob/main/file_name.ext",
        "github_repo_url": "https://github.com/username/repo",
        "status_code": 200
      }
    res.json(data);
});

app.post('/login', (req, res) => {
    console.log(req.body);
    res.send('Successfully posted data');

});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});