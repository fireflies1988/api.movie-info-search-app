const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const DISCOVER = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=en-US&sort_by=popularity.desc&page={page}`;
const SEARCH = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&language=en-US&page={page}&query={query}`;

const app = express();

app.use(cors());

app.get("/discover", async (req, res) => {
  const response = await axios.get(DISCOVER.replace("{page}", req.query.page || 1));
  res.json(response.data);
});

app.get("/search", async (req, res) => {
    const response = await axios.get(SEARCH.replace("{page}", req.query.page || 1).replace("{query}", req.query.query));
    res.json(response.data);
});

app.listen(process.env.PORT || 3000);