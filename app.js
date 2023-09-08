const express = require("express");
const app = express();
const port = 3000 || process.env.PORT;

// middleware
app.use(express.urlencoded({ extended: true }));

// routes
app.get("/api", (req, res) => {
  try {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const slackName = req.query.slack_name;
    const track = req.query.track;
    const now = new Date();
    const utcTime = now.toISOString().slice(0, -5) + 'Z';
    let data = {
      slack_name: slackName,
      current_day: daysOfWeek[new Date().getDay()],
      utc_time: utcTime,
      track: track,
      github_file_url:
        "https://github.com/oluwaseun-Adesina/task_one/blob/main/app.js",
      github_repo_url: "https://github.com/oluwaseun-Adesina/task_one",
      status_code: 200,
    };
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/login", (req, res) => {
  console.log(req.body);
  res.send("Successfully posted data");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
