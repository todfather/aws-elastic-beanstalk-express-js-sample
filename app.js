const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello Lucy and Matthew! How Cool is this? I do not know Javascript that well'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
