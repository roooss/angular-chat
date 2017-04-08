const express = require('express');
const router = express.Router();

// declare axios for making http requests
const axios = require('axios');
const API = 'https://api.clashofclans.com/v1';
const clanTag = '#YYYRCGYG';
const apiToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImQ2MjZhMzFkLWU3M2QtNDNhYy04YzY3LWFjN2NmYjQ3ZDA4OSIsImlhdCI6MTQ5MTYwNDIzMiwic3ViIjoiZGV2ZWxvcGVyL2FkNjBjNDRiLWYwMDAtYjk2NC03OGIyLTQ2NWU0MzE5NWYyYSIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjUxLjE0MC4zNi4yMzciXSwidHlwZSI6ImNsaWVudCJ9XX0.kaqUwcR070wHv8r2LlDku5xQlZdkGVVKR1x_qVRCGG_43pDgdl3kv0D7ZrW4bABhMiA99oVOBYqZqszYAXp66w';

/* GET api listing. */
router.get('/', (req, res) => {
   res.send('api works');
});

// Get all posts
router.get('/clan-details', (req, res) => {
    // Get posts from the mock api
    // This should ideally be replaced with a service that connects to MongoDB
    axios.get(`${API}/clans/${encodeURIComponent(clanTag)}`, { headers: {'Accept': 'application/json', 'Authorization': `Bearer ${apiToken}`} })
	 .then(posts => {
	     res.setHeader('Content-Type', 'application/json');
             res.status(200).json(posts.data);
	 })
	.catch(error => {
	    res.status(500).send(error)
	});
});

module.exports = router;
