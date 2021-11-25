import express from 'express';
const config = require('./config/config')
const app = express();
const PORT = config.PORT || 8080;
const HOST = config.HOST || 'localhost'
app.get('/', (req,res) => res.send('Express - TypeScript Server121212'));
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at ${HOST}:${PORT}!!!`);
  console.log(`GO TO -> ${HOST} !!!`)
});